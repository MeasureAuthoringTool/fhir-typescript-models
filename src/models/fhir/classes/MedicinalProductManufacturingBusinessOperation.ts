/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductManufacturingBusinessOperation,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductManufacturingBusinessOperation", "BackboneElement")
export class MedicinalProductManufacturingBusinessOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.ManufacturingBusinessOperation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public operationType?: CodeableConcept;

  @FhirField("Identifier")
  public authorisationReferenceNumber?: Identifier;

  @FhirField("PrimitiveDateTime")
  public effectiveDate?: PrimitiveDateTime;

  @FhirField("CodeableConcept")
  public confidentialityIndicator?: CodeableConcept;

  @FhirList("Reference")
  public manufacturer?: Array<Reference>;

  @FhirField("Reference")
  public regulator?: Reference;

  public static parse(
    json: IMedicinalProductManufacturingBusinessOperation,
    providedInstance: MedicinalProductManufacturingBusinessOperation = new MedicinalProductManufacturingBusinessOperation()
  ): MedicinalProductManufacturingBusinessOperation {
    const newInstance: MedicinalProductManufacturingBusinessOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.operationType !== undefined) {
      newInstance.operationType = CodeableConcept.parse(json.operationType);
    }
    if (json.authorisationReferenceNumber !== undefined) {
      newInstance.authorisationReferenceNumber = Identifier.parse(json.authorisationReferenceNumber);
    }
    if (json.effectiveDate !== undefined) {
      newInstance.effectiveDate = PrimitiveDateTime.parsePrimitive(json.effectiveDate, json._effectiveDate);
    }
    if (json.confidentialityIndicator !== undefined) {
      newInstance.confidentialityIndicator = CodeableConcept.parse(json.confidentialityIndicator);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.regulator !== undefined) {
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

  public clone(): MedicinalProductManufacturingBusinessOperation {
    return MedicinalProductManufacturingBusinessOperation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductManufacturingBusinessOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
