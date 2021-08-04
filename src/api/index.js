const BASE_URL = process.env.BASE_URL
const TYPE_SEARCH = 'SEARCH'

const API = async function (type, { shift, closeUnits }) {
    if (type === TYPE_SEARCH) {
        let response = await fetch(BASE_URL)
            .then(res => res.json());
        if (response.success) {
            const data = response.locations;
            function getValues(value) {
                if (value.includes('às', 0)) {
                    return value.split(' às ')
                } else {
                    return value
                }
            }
            function getValuesShift(value) {
                if (value.includes('às', 0)) {
                    const shiftValue = value.split(' às ').map((item) => { return item.split(':') })
                    return [shiftValue[0][0] + 'h', shiftValue[1][0] + 'h']
                } else {
                    return value
                }
            }
            function insideUnitShift(array) {        
                for (let i = 0; i < array.length; i++) {
                    const weekdays = getValues(array[i].hour)
                    const shiftComp = getValuesShift(shift)
                    if (Array.isArray(weekdays)) {
                        if ((shiftComp[0] >= weekdays[0] && shiftComp[0] <= weekdays[1]) && (shiftComp[1] >= weekdays[0] && shiftComp[1] <= weekdays[1])) {                            
                            return true
                        } else {                            
                            return false
                        }
                    } else {
                        return true
                    }
                }
            }
            function filterLocation(obj) {
                if (obj !== undefined) {
                    if (closeUnits === false) {
                        if (obj.opened) {
                            const sche = obj.schedules
                            if (sche !== undefined) {
                                if (insideUnitShift(sche)) {
                                    return true
                                } else {
                                    return false
                                }
                            } else {
                                return false
                            }
                        } else {
                            return false
                        }
                    } else {
                        const sche = obj.schedules
                        if (sche !== undefined) {
                            if (insideUnitShift(sche)) {
                                return true
                            } else {
                                return false
                            }
                        }
                        else {
                            return false
                        }
                    }
                } else {
                    return false
                }
            }
            function getPath(type, value) {
                if (type === 'mask') {
                    const mask = ['./img/required-mask.png', './img/recommended-mask.png']
                    for (let i = 0; i < mask.length; i++) {
                        if (mask[i].includes(value)) {
                            return mask[i]
                        }
                    }
                    return undefined
                }
                if (type === 'towel') {
                    const towel = ['./img/required-towel.png', './img/recommended-towel.png']
                    for (let i = 0; i < towel.length; i++) {
                        if (towel[i].includes(value)) {
                            return towel[i]
                        }
                    }
                    return undefined
                }
                if (type === 'lockerroom') {
                    const lockerroom = ['./img/forbidden-lockerroom.png', './img/partial-lockerroom.png', './img/required-lockerroom.png']
                    for (let i = 0; i < lockerroom.length; i++) {
                        if (lockerroom[i].includes(value)) {
                            return lockerroom[i]
                        }
                    }
                    return undefined
                }
                if (type === 'fountain') {
                    const fountain = ['./img/forbidden-fountain.png', './img/partial-fountain.png']
                    for (let i = 0; i < fountain.length; i++) {
                        if (fountain[i].includes(value)) {
                            return fountain[i]
                        }
                    }
                    return undefined
                }

            }            
            const resultado = data.filter(filterLocation)

            for (let i = 0; i < resultado.length; i++) {
                const element = resultado[i]
                resultado[i].content = element.content; 
                resultado[i].mask = getPath('mask', element.mask)
                resultado[i].towel = getPath('towel', element.towel)
                resultado[i].fountain = getPath('fountain', element.fountain)
                resultado[i].locker_room = getPath('lockerroom', element.locker_room)
            }
            return { resultado, 'qtd': resultado.length }
        }
    }
}

export default API;