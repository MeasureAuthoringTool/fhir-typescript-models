import "jest-extended";
import { MedicationRequest } from "../src/models/fhir/classes/MedicationRequest";
import { ValueSet } from "../src/models/fhir/classes/ValueSet";

describe("Resources", () => {
  it("JSON of a new MedicationRequest resource should have a resourceType value", () => {
    const resource: MedicationRequest = new MedicationRequest();
    expect(resource.resourceType).toEqual("MedicationRequest");
    expect(resource.toJSON()).toEqual({
      resourceType: "MedicationRequest",
    });
  });

  it("JSON of a new ValueSet resource should have a resourceType value", () => {
    const resource: ValueSet = new ValueSet();
    expect(resource.resourceType).toEqual("ValueSet");
    expect(resource.toJSON()).toEqual({
      resourceType: "ValueSet",
    });
  });
});
