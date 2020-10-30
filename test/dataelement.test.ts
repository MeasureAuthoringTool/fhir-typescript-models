import { DataElement } from "../src/models/cqm";
import { MedicationRequest } from "../src/models/fhir/classes/MedicationRequest";

describe("DataElements", () => {
  it("can be cloned", () => {
    const dataElement: DataElement = new DataElement();
    dataElement.codeListId = "code list id";
    dataElement.description = "data element description";
    dataElement.valueSetTitle = "value set title";
    const resource: MedicationRequest = new MedicationRequest();
    resource.id = "med_req_1";
    dataElement.fhir_resource = resource;

    const clonedDataElement: DataElement = dataElement.clone();
    expect(clonedDataElement).toBeDefined();
    expect(clonedDataElement.toJSON()).toEqual(dataElement.toJSON());
    expect(clonedDataElement.toJSON()).toEqual({
      codeListId: "code list id",
      description: "data element description",
      fhir_resource: {
        id: "med_req_1",
        resourceType: "MedicationRequest",
      },
      valueSetTitle: "value set title",
    });
  });
});
