import "jest-extended";
import {CqmPatient} from "../src/models/cqm/Patient";
import patientJson from "./resources/cqm-patient.json";

describe("Parsing CQM Patient JSON", () => {
  it("s parsed JSON should match to serialized JSON", () => {
    const cqmPatient: CqmPatient = CqmPatient.parse(patientJson);
    expect(cqmPatient).toBeDefined();
    expect(patientJson).toEqual(cqmPatient.toJSON());
  });
});
