import { equipmentHtml } from "./Equipment.js"
import { useEquipment } from "./equipmentDataProvider.js"

const targetHtml = document.querySelector(".equipmentAside")

export const EquipmentList = () => {
    //Array of employees
    const arrayOfEquipment = useEquipment()

    for (const equipmentObject of arrayOfEquipment) {
        //HTML representation of Employees
        const htmlRepresentativeEquipment = equipmentHtml(equipmentObject)
        // Place HTML into the DOM
        targetHtml.innerHTML += htmlRepresentativeEquipment
    }
}