/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ChargeItemDefinitionApplicability,
  ChargeItemDefinitionPropertyGroupPriceComponent,
  FhirList,
  IChargeItemDefinitionPropertyGroup,
  FhirType
} from "../internal";

@FhirType("ChargeItemDefinitionPropertyGroup", "BackboneElement")
export class ChargeItemDefinitionPropertyGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinition.PropertyGroup";

  static readonly primaryCodePath: string | null = null;

  @FhirList("ChargeItemDefinitionApplicability")
  public applicability?: Array<ChargeItemDefinitionApplicability>;

  @FhirList("ChargeItemDefinitionPropertyGroupPriceComponent")
  public priceComponent?: Array<ChargeItemDefinitionPropertyGroupPriceComponent>;

  public static parse(
    json: IChargeItemDefinitionPropertyGroup,
    providedInstance: ChargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroup()
  ): ChargeItemDefinitionPropertyGroup {
    const newInstance: ChargeItemDefinitionPropertyGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.applicability !== undefined) {
      newInstance.applicability = json.applicability.map((x) => ChargeItemDefinitionApplicability.parse(x));
    }
    if (json.priceComponent !== undefined) {
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

  public clone(): ChargeItemDefinitionPropertyGroup {
    return ChargeItemDefinitionPropertyGroup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemDefinitionPropertyGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
