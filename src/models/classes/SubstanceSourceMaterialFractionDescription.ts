/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSourceMaterialFractionDescription,
  PrimitiveString,
} from "../internal";

export class SubstanceSourceMaterialFractionDescription extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.FractionDescription";

  public fraction?: PrimitiveString;

  public materialType?: CodeableConcept;

  public static parse(
    json: ISubstanceSourceMaterialFractionDescription,
    providedInstance: SubstanceSourceMaterialFractionDescription = new SubstanceSourceMaterialFractionDescription()
  ): SubstanceSourceMaterialFractionDescription {
    const newInstance: SubstanceSourceMaterialFractionDescription = BackboneElement.parse(json, providedInstance);
  
    if (json.fraction) {
      newInstance.fraction = PrimitiveString.parsePrimitive(json.fraction, json._fraction);
    }
    if (json.materialType) {
      newInstance.materialType = CodeableConcept.parse(json.materialType);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialFractionDescription(input?: unknown): input is SubstanceSourceMaterialFractionDescription {
    const castInput = input as SubstanceSourceMaterialFractionDescription;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialFractionDescription";
  }

  public toJSON(): ISubstanceSourceMaterialFractionDescription {
    const result: ISubstanceSourceMaterialFractionDescription = super.toJSON();

    if (this.fraction) {
      result.fraction = this.fraction.value;
      result._fraction = Extension.serializePrimitiveExtension(this.fraction);
    }

    if (this.materialType) {
      result.materialType = this.materialType.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstanceSourceMaterialFractionDescription";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
