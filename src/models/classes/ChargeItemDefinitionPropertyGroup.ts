/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ChargeItemDefinitionApplicability,
  ChargeItemDefinitionPropertyGroupPriceComponent,
  IChargeItemDefinitionPropertyGroup,
} from "../internal";

export class ChargeItemDefinitionPropertyGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinition.PropertyGroup";

  public applicability?: Array<ChargeItemDefinitionApplicability>;

  public priceComponent?: Array<ChargeItemDefinitionPropertyGroupPriceComponent>;

  public static parse(
    json: IChargeItemDefinitionPropertyGroup,
    providedInstance: ChargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroup()
  ): ChargeItemDefinitionPropertyGroup {
    const newInstance: ChargeItemDefinitionPropertyGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.applicability) {
      newInstance.applicability = json.applicability.map((x) => ChargeItemDefinitionApplicability.parse(x));
    }
    if (json.priceComponent) {
      newInstance.priceComponent = json.priceComponent.map((x) => ChargeItemDefinitionPropertyGroupPriceComponent.parse(x));
    }
    return newInstance;
  }

  public static isChargeItemDefinitionPropertyGroup(input?: unknown): input is ChargeItemDefinitionPropertyGroup {
    const castInput = input as ChargeItemDefinitionPropertyGroup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemDefinitionPropertyGroup";
  }

  public toJSON(): IChargeItemDefinitionPropertyGroup {
    const result: IChargeItemDefinitionPropertyGroup = super.toJSON();

    if (this.applicability) {
      result.applicability = this.applicability.map((x) => x.toJSON());
    }

    if (this.priceComponent) {
      result.priceComponent = this.priceComponent.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ChargeItemDefinitionPropertyGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
