/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  FhirField,
  FhirList,
  IMedicinalProductManufactured,
  ProdCharacteristic,
  Quantity,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductManufactured", "DomainResource")
export class MedicinalProductManufactured extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductManufactured";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public manufacturedDoseForm?: CodeableConcept;

  @FhirField("CodeableConcept")
  public unitOfPresentation?: CodeableConcept;

  @FhirField("Quantity")
  public quantity?: Quantity;

  @FhirList("Reference")
  public manufacturer?: Array<Reference>;

  @FhirList("Reference")
  public ingredient?: Array<Reference>;

  @FhirField("ProdCharacteristic")
  public physicalCharacteristics?: ProdCharacteristic;

  @FhirList("CodeableConcept")
  public otherCharacteristics?: Array<CodeableConcept>;

  public static parse(
    json: IMedicinalProductManufactured,
    providedInstance: MedicinalProductManufactured = new MedicinalProductManufactured()
  ): MedicinalProductManufactured {
    const newInstance: MedicinalProductManufactured = DomainResource.parse(json, providedInstance);
  
    if (json.manufacturedDoseForm !== undefined) {
      newInstance.manufacturedDoseForm = CodeableConcept.parse(json.manufacturedDoseForm);
    }
    if (json.unitOfPresentation !== undefined) {
      newInstance.unitOfPresentation = CodeableConcept.parse(json.unitOfPresentation);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.manufacturer !== undefined) {
      newInstance.manufacturer = json.manufacturer.map((x) => Reference.parse(x));
    }
    if (json.ingredient !== undefined) {
      newInstance.ingredient = json.ingredient.map((x) => Reference.parse(x));
    }
    if (json.physicalCharacteristics !== undefined) {
      newInstance.physicalCharacteristics = ProdCharacteristic.parse(json.physicalCharacteristics);
    }
    if (json.otherCharacteristics !== undefined) {
      newInstance.otherCharacteristics = json.otherCharacteristics.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductManufactured(input?: unknown): input is MedicinalProductManufactured {
    const castInput = input as MedicinalProductManufactured;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductManufactured";
  }

  public toJSON(): IMedicinalProductManufactured {
    const result: IMedicinalProductManufactured = super.toJSON();

    if (this.manufacturedDoseForm) {
      result.manufacturedDoseForm = this.manufacturedDoseForm.toJSON();
    }

    if (this.unitOfPresentation) {
      result.unitOfPresentation = this.unitOfPresentation.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.map((x) => x.toJSON());
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    if (this.physicalCharacteristics) {
      result.physicalCharacteristics = this.physicalCharacteristics.toJSON();
    }

    if (this.otherCharacteristics) {
      result.otherCharacteristics = this.otherCharacteristics.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductManufactured {
    return MedicinalProductManufactured.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductManufactured";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
