/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IChargeItemDefinitionApplicability,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ChargeItemDefinitionApplicability", "BackboneElement")
export class ChargeItemDefinitionApplicability extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinition.Applicability";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveString")
  public language?: PrimitiveString;

  @FhirField("PrimitiveString")
  public expression?: PrimitiveString;

  public static parse(
    json: IChargeItemDefinitionApplicability,
    providedInstance: ChargeItemDefinitionApplicability = new ChargeItemDefinitionApplicability()
  ): ChargeItemDefinitionApplicability {
    const newInstance: ChargeItemDefinitionApplicability = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.language !== undefined) {
      newInstance.language = PrimitiveString.parsePrimitive(json.language, json._language);
    }
    if (json.expression !== undefined) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    return newInstance;
  }

  public static isChargeItemDefinitionApplicability(input?: unknown): input is ChargeItemDefinitionApplicability {
    const castInput = input as ChargeItemDefinitionApplicability;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemDefinitionApplicability";
  }

  public toJSON(): IChargeItemDefinitionApplicability {
    const result: IChargeItemDefinitionApplicability = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    return result;
  }

  public clone(): ChargeItemDefinitionApplicability {
    return ChargeItemDefinitionApplicability.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemDefinitionApplicability";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
