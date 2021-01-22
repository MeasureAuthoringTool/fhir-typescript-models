/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IClinicalImpressionFinding,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClinicalImpressionFinding", "BackboneElement")
export class ClinicalImpressionFinding extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClinicalImpression.Finding";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public itemCodeableConcept?: CodeableConcept;

  @FhirField("Reference")
  public itemReference?: Reference;

  @FhirField("PrimitiveString")
  public basis?: PrimitiveString;

  public static parse(
    json: IClinicalImpressionFinding,
    providedInstance: ClinicalImpressionFinding = new ClinicalImpressionFinding()
  ): ClinicalImpressionFinding {
    const newInstance: ClinicalImpressionFinding = BackboneElement.parse(json, providedInstance);
  
    if (json.itemCodeableConcept !== undefined) {
      newInstance.itemCodeableConcept = CodeableConcept.parse(json.itemCodeableConcept);
    }
    if (json.itemReference !== undefined) {
      newInstance.itemReference = Reference.parse(json.itemReference);
    }
    if (json.basis !== undefined) {
      newInstance.basis = PrimitiveString.parsePrimitive(json.basis, json._basis);
    }
    return newInstance;
  }

  public static isClinicalImpressionFinding(input?: unknown): input is ClinicalImpressionFinding {
    const castInput = input as ClinicalImpressionFinding;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClinicalImpressionFinding";
  }

  public toJSON(): IClinicalImpressionFinding {
    const result: IClinicalImpressionFinding = super.toJSON();

    if (this.itemCodeableConcept) {
      result.itemCodeableConcept = this.itemCodeableConcept.toJSON();
    }

    if (this.itemReference) {
      result.itemReference = this.itemReference.toJSON();
    }

    if (this.basis) {
      result.basis = this.basis.value;
      result._basis = Extension.serializePrimitiveExtension(this.basis);
    }

    return result;
  }

  public clone(): ClinicalImpressionFinding {
    return ClinicalImpressionFinding.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClinicalImpressionFinding";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
