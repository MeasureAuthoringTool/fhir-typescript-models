import "jest-extended";
import {Bundle, IBundle, Patient, Resource} from "../src/models/fhir";
import bundleContents from "./resources/EXM104-9.1.000-bundle.json";

describe("Parsing a FHIR bundle", () => {
  it("should parse the bundle with no errors", () => {
    const bundle: Resource = Resource.parse(bundleContents);
    expect(bundle.id).toBe("EXM104-9.1.000-bundle");
    expect(Bundle.isBundle(bundle)).toBeTrue();
    if (Bundle.isBundle(bundle)) {
      expect(bundle.type?.value).toBe("transaction");
    }

    // Write the bundle back to JSON using our json logic
    const serializedJson: string = JSON.stringify(bundle, null, "  ");

    // Parse our JSON output the same way
    const jsonObj: IBundle = JSON.parse(serializedJson);
    const newBundle: Bundle = Resource.parse(jsonObj);
    expect(newBundle).toEqual(bundle);

    // Compare our serialized JSON with the connectathon JSON
    expect(bundleContents).toEqual(bundleContents);
  });

});
