/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  Identifier,
  IMedicinalProductPackagedBatchIdentifier,
  FhirType
} from "../internal";

@FhirType("MedicinalProductPackagedBatchIdentifier", "BackboneElement")
export class MedicinalProductPackagedBatchIdentifier extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPackaged.BatchIdentifier";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public outerPackaging?: Identifier;

  @FhirField("Identifier")
  public immediatePackaging?: Identifier;

  public static parse(
    json: IMedicinalProductPackagedBatchIdentifier,
    providedInstance: MedicinalProductPackagedBatchIdentifier = new MedicinalProductPackagedBatchIdentifier()
  ): MedicinalProductPackagedBatchIdentifier {
    const newInstance: MedicinalProductPackagedBatchIdentifier = BackboneElement.parse(json, providedInstance);
  
    if (json.outerPackaging !== undefined) {
      newInstance.outerPackaging = Identifier.parse(json.outerPackaging);
    }
    if (json.immediatePackaging !== undefined) {
      newInstance.immediatePackaging = Identifier.parse(json.immediatePackaging);
    }
    return newInstance;
  }

  public static isMedicinalProductPackagedBatchIdentifier(input?: unknown): input is MedicinalProductPackagedBatchIdentifier {
    const castInput = input as MedicinalProductPackagedBatchIdentifier;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPackagedBatchIdentifier";
  }

  public toJSON(): IMedicinalProductPackagedBatchIdentifier {
    const result: IMedicinalProductPackagedBatchIdentifier = super.toJSON();

    if (this.outerPackaging) {
      result.outerPackaging = this.outerPackaging.toJSON();
    }

    if (this.immediatePackaging) {
      result.immediatePackaging = this.immediatePackaging.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductPackagedBatchIdentifier {
    return MedicinalProductPackagedBatchIdentifier.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPackagedBatchIdentifier";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
