import "jest-extended";
import {CqmPatient} from "../src/models/cqm/Patient";
import patientJson from "./resources/cqm-patient.json";

describe("Parsing CQM Patient JSON", () => {
  it("s parsed JSON should match to serialized JSON", () => {
    const cqmPatient: CqmPatient = CqmPatient.parse(patientJson);
    expect(cqmPatient).toBeDefined();
    expect(cqmPatient.toJSON()).toEqual(patientJson);
  });

  it("Should parse a CQM Patient with FHIR Resources as Data Elements", () => {
    const updatedPatientJson = cloneJson(patientJson);
    const dataElement = {
      "fhir_resource": {
        "meta": {"profile": ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"]},
        "resourceType": "Condition",
        "verificationStatus": {
          "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            "code": "confirmed",
            "display": "Confirmed"
          }]
        },
        "category": [{
          "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
            "code": "encounter-diagnosis",
            "display": "Encounter Diagnosis"
          }]
        }],
        "code": {
          "coding": [{
            "system": "http://snomed.info/sct",
            "code": "116288000",
            "display": "Paralytic stroke (disorder)"
          }]
        },
        "subject": {"reference": "Patient/denom-EXM104"},
        "id": "denom-EXM104-1"
      }
    };
    updatedPatientJson.data_elements = [dataElement];
    const cqmPatient: CqmPatient = CqmPatient.parse(updatedPatientJson);
    expect(cqmPatient).toBeDefined();
    expect(cqmPatient.data_elements).toBeDefined();
    expect(cqmPatient.toJSON()).toEqual(updatedPatientJson);
  });

  function cloneJson(json: any): any {
    return JSON.parse(JSON.stringify(json));
  }

});
