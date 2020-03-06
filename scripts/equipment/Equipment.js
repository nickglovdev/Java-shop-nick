export const equipmentHtml = (equipmentObject) => {
    return `
    <ul>
        <li>id: ${equipmentObject.id}</li>
        <li>serialNumber: ${equipmentObject.serialNumber}</li>
        <li>Model: ${equipmentObject.model}</li>
        <li>isFunctional: ${equipmentObject.isFunctional}</li>
        <li>Under Warranty: ${equipmentObject.isUnderWarranty}</li>
    </ul>
     `
}