/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  FhirField,
  FhirList,
  Identifier,
  IMedicinalProductPharmaceutical,
  MedicinalProductPharmaceuticalCharacteristics,
  MedicinalProductPharmaceuticalRouteOfAdministration,
  Reference,
  FhirType
} from "../internal";

@FhirType("MedicinalProductPharmaceutical", "DomainResource")
export class MedicinalProductPharmaceutical extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public administrableDoseForm?: CodeableConcept;

  @FhirField("CodeableConcept")
  public unitOfPresentation?: CodeableConcept;

  @FhirList("Reference")
  public ingredient?: Array<Reference>;

  @FhirList("Reference")
  public device?: Array<Reference>;

  @FhirList("MedicinalProductPharmaceuticalCharacteristics")
  public characteristics?: Array<MedicinalProductPharmaceuticalCharacteristics>;

  @FhirList("MedicinalProductPharmaceuticalRouteOfAdministration")
  public routeOfAdministration?: Array<MedicinalProductPharmaceuticalRouteOfAdministration>;

  public static parse(
    json: IMedicinalProductPharmaceutical,
    providedInstance: MedicinalProductPharmaceutical = new MedicinalProductPharmaceutical()
  ): MedicinalProductPharmaceutical {
    const newInstance: MedicinalProductPharmaceutical = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.administrableDoseForm !== undefined) {
      newInstance.administrableDoseForm = CodeableConcept.parse(json.administrableDoseForm);
    }
    if (json.unitOfPresentation !== undefined) {
      newInstance.unitOfPresentation = CodeableConcept.parse(json.unitOfPresentation);
    }
    if (json.ingredient !== undefined) {
      newInstance.ingredient = json.ingredient.map((x) => Reference.parse(x));
    }
    if (json.device !== undefined) {
      newInstance.device = json.device.map((x) => Reference.parse(x));
    }
    if (json.characteristics !== undefined) {
      newInstance.characteristics = json.characteristics.map((x) => MedicinalProductPharmaceuticalCharacteristics.parse(x));
    }
    if (json.routeOfAdministration !== undefined) {
      newInstance.routeOfAdministration = json.routeOfAdministration.map((x) => MedicinalProductPharmaceuticalRouteOfAdministration.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductPharmaceutical(input?: unknown): input is MedicinalProductPharmaceutical {
    const castInput = input as MedicinalProductPharmaceutical;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPharmaceutical";
  }

  public toJSON(): IMedicinalProductPharmaceutical {
    const result: IMedicinalProductPharmaceutical = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.administrableDoseForm) {
      result.administrableDoseForm = this.administrableDoseForm.toJSON();
    }

    if (this.unitOfPresentation) {
      result.unitOfPresentation = this.unitOfPresentation.toJSON();
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    if (this.device) {
      result.device = this.device.map((x) => x.toJSON());
    }

    if (this.characteristics) {
      result.characteristics = this.characteristics.map((x) => x.toJSON());
    }

    if (this.routeOfAdministration) {
      result.routeOfAdministration = this.routeOfAdministration.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductPharmaceutical {
    return MedicinalProductPharmaceutical.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPharmaceutical";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
