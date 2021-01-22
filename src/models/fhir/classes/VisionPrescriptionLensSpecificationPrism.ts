/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IVisionPrescriptionLensSpecificationPrism,
  PrimitiveDecimal,
  VisionBase,
  FhirType
} from "../internal";

@FhirType("VisionPrescriptionLensSpecificationPrism", "BackboneElement")
export class VisionPrescriptionLensSpecificationPrism extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionPrescription.LensSpecification.Prism";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDecimal")
  public amount?: PrimitiveDecimal;

  @FhirField("VisionBase")
  public base?: VisionBase;

  public static parse(
    json: IVisionPrescriptionLensSpecificationPrism,
    providedInstance: VisionPrescriptionLensSpecificationPrism = new VisionPrescriptionLensSpecificationPrism()
  ): VisionPrescriptionLensSpecificationPrism {
    const newInstance: VisionPrescriptionLensSpecificationPrism = BackboneElement.parse(json, providedInstance);
  
    if (json.amount !== undefined) {
      newInstance.amount = PrimitiveDecimal.parsePrimitive(json.amount, json._amount);
    }
    if (json.base !== undefined) {
      newInstance.base = VisionBase.parsePrimitive(json.base, json._base);
    }
    return newInstance;
  }

  public static isVisionPrescriptionLensSpecificationPrism(input?: unknown): input is VisionPrescriptionLensSpecificationPrism {
    const castInput = input as VisionPrescriptionLensSpecificationPrism;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionPrescriptionLensSpecificationPrism";
  }

  public toJSON(): IVisionPrescriptionLensSpecificationPrism {
    const result: IVisionPrescriptionLensSpecificationPrism = super.toJSON();

    if (this.amount) {
      result.amount = this.amount.value;
      result._amount = Extension.serializePrimitiveExtension(this.amount);
    }

    if (this.base) {
      result.base = this.base.value;
      result._base = Extension.serializePrimitiveExtension(this.base);
    }

    return result;
  }

  public clone(): VisionPrescriptionLensSpecificationPrism {
    return VisionPrescriptionLensSpecificationPrism.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VisionPrescriptionLensSpecificationPrism";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
