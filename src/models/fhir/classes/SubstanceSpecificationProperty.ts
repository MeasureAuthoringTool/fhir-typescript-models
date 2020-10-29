/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSpecificationProperty,
  PrimitiveString,
  Quantity,
  Reference,
  FieldMetadata
} from "../internal";

export class SubstanceSpecificationProperty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSpecification.Property";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "parameters",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "definingSubstance",
      fieldType: [Reference, CodeableConcept],
      isArray: false
    }, {
      fieldName: "amount",
      fieldType: [Quantity, PrimitiveString],
      isArray: false
    }];
  }

  public category?: CodeableConcept;

  public code?: CodeableConcept;

  public parameters?: PrimitiveString;

  public definingSubstance?: Reference | CodeableConcept;

  public amount?: Quantity | PrimitiveString;

  public static parse(
    json: ISubstanceSpecificationProperty,
    providedInstance: SubstanceSpecificationProperty = new SubstanceSpecificationProperty()
  ): SubstanceSpecificationProperty {
    const newInstance: SubstanceSpecificationProperty = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.parameters !== undefined) {
      newInstance.parameters = PrimitiveString.parsePrimitive(json.parameters, json._parameters);
    }
    if (json.definingSubstanceReference !== undefined) {
      newInstance.definingSubstance = Reference.parse(json.definingSubstanceReference);
    }
    if (json.definingSubstanceCodeableConcept !== undefined) {
      newInstance.definingSubstance = CodeableConcept.parse(json.definingSubstanceCodeableConcept);
    }
    if (json.amountQuantity !== undefined) {
      newInstance.amount = Quantity.parse(json.amountQuantity);
    }
    if (json.amountString !== undefined) {
      newInstance.amount = PrimitiveString.parsePrimitive(json.amountString, json._amountString);
    }
    return newInstance;
  }

  public static isSubstanceSpecificationProperty(input?: unknown): input is SubstanceSpecificationProperty {
    const castInput = input as SubstanceSpecificationProperty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSpecificationProperty";
  }

  public toJSON(): ISubstanceSpecificationProperty {
    const result: ISubstanceSpecificationProperty = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.parameters) {
      result.parameters = this.parameters.value;
      result._parameters = Extension.serializePrimitiveExtension(this.parameters);
    }

    if (this.definingSubstance && Reference.isReference(this.definingSubstance)) {
      result.definingSubstanceReference = this.definingSubstance.toJSON();
    }

    if (this.definingSubstance && CodeableConcept.isCodeableConcept(this.definingSubstance)) {
      result.definingSubstanceCodeableConcept = this.definingSubstance.toJSON();
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

  public clone(): SubstanceSpecificationProperty {
    return SubstanceSpecificationProperty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSpecificationProperty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
