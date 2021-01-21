/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  Identifier,
  ISubstanceSpecificationMoiety,
  PrimitiveString,
  Quantity,
  FhirType
} from "../internal";

@FhirType("SubstanceSpecificationMoiety", "BackboneElement")
export class SubstanceSpecificationMoiety extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Moiety";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("CodeableConcept")
  public stereochemistry?: CodeableConcept;

  @FhirField("CodeableConcept")
  public opticalActivity?: CodeableConcept;

  @FhirField("PrimitiveString")
  public molecularFormula?: PrimitiveString;

  @FhirChoice("Quantity", "PrimitiveString")
  public amount?: Quantity | PrimitiveString;

  public static parse(
    json: ISubstanceSpecificationMoiety,
    providedInstance: SubstanceSpecificationMoiety = new SubstanceSpecificationMoiety()
  ): SubstanceSpecificationMoiety {
    const newInstance: SubstanceSpecificationMoiety = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.stereochemistry !== undefined) {
      newInstance.stereochemistry = CodeableConcept.parse(json.stereochemistry);
    }
    if (json.opticalActivity !== undefined) {
      newInstance.opticalActivity = CodeableConcept.parse(json.opticalActivity);
    }
    if (json.molecularFormula !== undefined) {
      newInstance.molecularFormula = PrimitiveString.parsePrimitive(json.molecularFormula, json._molecularFormula);
    }
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationMoiety(input?: unknown): input is SubstanceSpecificationMoiety {
    const castInput = input as SubstanceSpecificationMoiety;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationMoiety";
  }

  public toJSON(): ISubstanceSpecificationMoiety {
    const result: ISubstanceSpecificationMoiety = super.toJSON();

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.stereochemistry) {
      result.stereochemistry = this.stereochemistry.toJSON();
    }

    if (this.opticalActivity) {
      result.opticalActivity = this.opticalActivity.toJSON();
    }

    if (this.molecularFormula) {
      result.molecularFormula = this.molecularFormula.value;
      result._molecularFormula = Extension.serializePrimitiveExtension(this.molecularFormula);
    }

    if (this.amount && Quantity.isQuantity(this.amount)) {
      result.amountQuantity = this.amount.toJSON();
    }

    if (this.amount && PrimitiveString.isPrimitiveString(this.amount)) {
      result.amountString = this.amount.value;
      result._amountString = Extension.serializePrimitiveExtension(this.amount);
    }

    return result;
  }

  public clone(): SubstanceSpecificationMoiety {
    return SubstanceSpecificationMoiety.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationMoiety";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
