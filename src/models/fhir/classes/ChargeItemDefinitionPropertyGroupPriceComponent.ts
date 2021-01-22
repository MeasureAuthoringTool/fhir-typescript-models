/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ChargeItemDefinitionPriceComponentType,
  CodeableConcept,
  Extension,
  FhirField,
  IChargeItemDefinitionPropertyGroupPriceComponent,
  Money,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("ChargeItemDefinitionPropertyGroupPriceComponent", "BackboneElement")
export class ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinition.PropertyGroup.PriceComponent";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ChargeItemDefinitionPriceComponentType")
  public type?: ChargeItemDefinitionPriceComponentType;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("Money")
  public amount?: Money;

  public static parse(
    json: IChargeItemDefinitionPropertyGroupPriceComponent,
    providedInstance: ChargeItemDefinitionPropertyGroupPriceComponent = new ChargeItemDefinitionPropertyGroupPriceComponent()
  ): ChargeItemDefinitionPropertyGroupPriceComponent {
    const newInstance: ChargeItemDefinitionPropertyGroupPriceComponent = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ChargeItemDefinitionPriceComponentType.parsePrimitive(json.type, json._type);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    return newInstance;
  }

  public static isChargeItemDefinitionPropertyGroupPriceComponent(input?: unknown): input is ChargeItemDefinitionPropertyGroupPriceComponent {
    const castInput = input as ChargeItemDefinitionPropertyGroupPriceComponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemDefinitionPropertyGroupPriceComponent";
  }

  public toJSON(): IChargeItemDefinitionPropertyGroupPriceComponent {
    const result: IChargeItemDefinitionPropertyGroupPriceComponent = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): ChargeItemDefinitionPropertyGroupPriceComponent {
    return ChargeItemDefinitionPropertyGroupPriceComponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemDefinitionPropertyGroupPriceComponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
