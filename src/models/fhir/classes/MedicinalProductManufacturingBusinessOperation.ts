/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  IMedicinalProductManufacturingBusinessOperation,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class MedicinalProductManufacturingBusinessOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.ManufacturingBusinessOperation";

  public operationType?: CodeableConcept;

  public authorisationReferenceNumber?: Identifier;

  public effectiveDate?: PrimitiveDateTime;

  public confidentialityIndicator?: CodeableConcept;

  public manufacturer?: Array<Reference>;

  public regulator?: Reference;

  public static parse(
    json: IMedicinalProductManufacturingBusinessOperation,
    providedInstance: MedicinalProductManufacturingBusinessOperation = new MedicinalProductManufacturingBusinessOperation()
  ): MedicinalProductManufacturingBusinessOperation {
    const newInstance: MedicinalProductManufacturingBusinessOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.operationType) {
      newInstance.operationType = CodeableConcept.parse(json.operationType);
    }
    if (json.authorisationReferenceNumber) {
      newInstance.authorisationReferenceNumber = Identifier.parse(json.authorisationReferenceNumber);
    }
    if (json.effectiveDate) {
      newInstance.effectiveDate = PrimitiveDateTime.parsePrimitive(json.effectiveDate, json._effectiveDate);
    }
    if (json.confidentialityIndicator) {
      newInstance.confidentialityIndicator = CodeableConcept.parse(json.confidentialityIndicator);
    }
    if (json.manufacturer) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.regulator) {
      newInstance.regulator = Reference.parse(json.regulator);
    }
    return newInstance;
  }

  public static isMedicinalProductManufacturingBusinessOperation(input?: unknown): input is MedicinalProductManufacturingBusinessOperation {
    const castInput = input as MedicinalProductManufacturingBusinessOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductManufacturingBusinessOperation";
  }

  public toJSON(): IMedicinalProductManufacturingBusinessOperation {
    const result: IMedicinalProductManufacturingBusinessOperation = super.toJSON();

    if (this.operationType) {
      result.operationType = this.operationType.toJSON();
    }

    if (this.authorisationReferenceNumber) {
      result.authorisationReferenceNumber = this.authorisationReferenceNumber.toJSON();
    }

    if (this.effectiveDate) {
      result.effectiveDate = this.effectiveDate.value;
      result._effectiveDate = Extension.serializePrimitiveExtension(this.effectiveDate);
    }

    if (this.confidentialityIndicator) {
      result.confidentialityIndicator = this.confidentialityIndicator.toJSON();
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.map((x) => x.toJSON());
    }

    if (this.regulator) {
      result.regulator = this.regulator.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicinalProductManufacturingBusinessOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
