/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IObservationDefinitionQuantitativeDetails,
  PrimitiveDecimal,
  PrimitiveInteger,
} from "../internal";

export class ObservationDefinitionQuantitativeDetails extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationDefinition.QuantitativeDetails";

  public customaryUnit?: CodeableConcept;

  public unit?: CodeableConcept;

  public conversionFactor?: PrimitiveDecimal;

  public decimalPrecision?: PrimitiveInteger;

  public static parse(
    json: IObservationDefinitionQuantitativeDetails,
    providedInstance: ObservationDefinitionQuantitativeDetails = new ObservationDefinitionQuantitativeDetails()
  ): ObservationDefinitionQuantitativeDetails {
    const newInstance: ObservationDefinitionQuantitativeDetails = BackboneElement.parse(json, providedInstance);
  
    if (json.customaryUnit !== undefined) {
      newInstance.customaryUnit = CodeableConcept.parse(json.customaryUnit);
    }
    if (json.unit !== undefined) {
      newInstance.unit = CodeableConcept.parse(json.unit);
    }
    if (json.conversionFactor !== undefined) {
      newInstance.conversionFactor = PrimitiveDecimal.parsePrimitive(json.conversionFactor, json._conversionFactor);
    }
    if (json.decimalPrecision !== undefined) {
      newInstance.decimalPrecision = PrimitiveInteger.parsePrimitive(json.decimalPrecision, json._decimalPrecision);
    }
    return newInstance;
  }

  public static isObservationDefinitionQuantitativeDetails(input?: unknown): input is ObservationDefinitionQuantitativeDetails {
    const castInput = input as ObservationDefinitionQuantitativeDetails;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationDefinitionQuantitativeDetails";
  }

  public toJSON(): IObservationDefinitionQuantitativeDetails {
    const result: IObservationDefinitionQuantitativeDetails = super.toJSON();

    if (this.customaryUnit) {
      result.customaryUnit = this.customaryUnit.toJSON();
    }

    if (this.unit) {
      result.unit = this.unit.toJSON();
    }

    if (this.conversionFactor) {
      result.conversionFactor = this.conversionFactor.value;
      result._conversionFactor = Extension.serializePrimitiveExtension(this.conversionFactor);
    }

    if (this.decimalPrecision) {
      result.decimalPrecision = this.decimalPrecision.value;
      result._decimalPrecision = Extension.serializePrimitiveExtension(this.decimalPrecision);
    }

    return result;
  }

  public clone(): ObservationDefinitionQuantitativeDetails {
    return ObservationDefinitionQuantitativeDetails.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ObservationDefinitionQuantitativeDetails";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
