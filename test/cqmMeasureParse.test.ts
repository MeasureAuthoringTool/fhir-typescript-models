import "jest-extended";
import {CqmMeasure} from "../src/models/cqm/Measure";
import measureJson from "./resources/cqm-measure.json";

describe("Parsing CQM Measure JSON", () => {
  it("s parsed JSON should match to serialized JSON", () => {
    const cqmMeasure: CqmMeasure = CqmMeasure.parse(measureJson);
    expect(cqmMeasure).toBeDefined();
    expect(measureJson).toEqual(cqmMeasure.toJSON());
  });
});
