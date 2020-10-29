import { CqmPatient, ICqmPatient } from "../src/models/cqm";
import { Bundle, Patient } from "../src/models/fhir/internal";
import rawPatientJson from "./resources/cqm-patient.json";

const patientJson: ICqmPatient = rawPatientJson;

function clonePatientJson(json: ICqmPatient): ICqmPatient {
  return JSON.parse(JSON.stringify(json)) as ICqmPatient;
}

function patientJsonWithDataElement(): ICqmPatient {
  const updatedPatientJson = clonePatientJson(patientJson);
  const dataElement = {
    fhir_resource: {
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
        ],
      },
      resourceType: "Condition",
      verificationStatus: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
            display: "Confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
              code: "encounter-diagnosis",
              display: "Encounter Diagnosis",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "116288000",
            display: "Paralytic stroke (disorder)",
          },
        ],
      },
      subject: { reference: "Patient/denom-EXM104" },
      id: "denom-EXM104-1",
    },
  };
  updatedPatientJson.data_elements = [dataElement];
  return updatedPatientJson;
}

describe("Parsing CQM Patient JSON", () => {
  it("s parsed JSON should match to serialized JSON", () => {
    const cqmPatient: CqmPatient = CqmPatient.parse(patientJson);
    expect(cqmPatient).toBeDefined();
    expect(cqmPatient.toJSON()).toEqual(patientJson);
  });

  it("s parsed Patient can be cloned", () => {
    const cqmPatient: CqmPatient = CqmPatient.parse(patientJson);
    const clonedPatient: CqmPatient = cqmPatient.clone();
    expect(clonedPatient).toBeDefined();
    expect(clonedPatient.toJSON()).toEqual(patientJson);
    expect(clonedPatient.toJSON()).toEqual(cqmPatient.toJSON());
    expect(clonedPatient.fhir_patient?.resourceType).toEqual('Patient');
  });

  it("Should parse a CQM Patient with FHIR Resources as Data Elements", () => {
    const updatedPatientJson = patientJsonWithDataElement();
    const cqmPatient: CqmPatient = CqmPatient.parse(updatedPatientJson);
    expect(cqmPatient).toBeDefined();
    expect(cqmPatient.data_elements).toBeDefined();
    expect(cqmPatient.toJSON()).toEqual(updatedPatientJson);
  });

  it("Patient resource type", () => {
    const p = new Patient();
    expect(p.resourceType).toEqual('Patient');
  });

  it("Should serialize CQM patient into a FHIR bundle with data elements", () => {
    const updatedPatientJson = patientJsonWithDataElement();
    const cqmPatient: CqmPatient = CqmPatient.parse(updatedPatientJson);
    expect(cqmPatient).toBeDefined();
    const bundle: Bundle = cqmPatient.toBundle();
    expect(bundle).toBeDefined();
    const bundleJson = bundle.toJSON();
    expect(bundleJson.id).toEqual("5f342d77b7b4da36487fde73");
    expect(bundleJson.entry).toBeDefined();
    expect(bundleJson.entry?.[0]).toBeDefined();
    expect(bundleJson.entry?.[0].resource).toBeDefined();
    expect(bundleJson.entry?.[0].resource?.resourceType).toEqual("Patient");
    expect(bundleJson.entry?.[1]).toBeDefined();
    expect(bundleJson.entry?.[1].resource).toBeDefined();
    expect(bundleJson.entry?.[1].resource?.resourceType).toEqual("Condition");
  });
});
