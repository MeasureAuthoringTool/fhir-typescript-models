/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Identifier,
  IMedicinalProductPharmaceutical,
  MedicinalProductPharmaceuticalCharacteristics,
  MedicinalProductPharmaceuticalRouteOfAdministration,
  Reference,
} from "../internal";

export class MedicinalProductPharmaceutical extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical";

  public identifier?: Array<Identifier>;

  public administrableDoseForm?: CodeableConcept;

  public unitOfPresentation?: CodeableConcept;

  public ingredient?: Array<Reference>;

  public device?: Array<Reference>;

  public characteristics?: Array<MedicinalProductPharmaceuticalCharacteristics>;

  public routeOfAdministration?: Array<MedicinalProductPharmaceuticalRouteOfAdministration>;

  public static parse(
    json: IMedicinalProductPharmaceutical,
    providedInstance: MedicinalProductPharmaceutical = new MedicinalProductPharmaceutical()
  ): MedicinalProductPharmaceutical {
    const newInstance: MedicinalProductPharmaceutical = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.administrableDoseForm) {
      newInstance.administrableDoseForm = CodeableConcept.parse(json.administrableDoseForm);
    }
    if (json.unitOfPresentation) {
      newInstance.unitOfPresentation = CodeableConcept.parse(json.unitOfPresentation);
    }
    if (json.ingredient) {
      newInstance.ingredient = json.ingredient.map((x) => Reference.parse(x));
    }
    if (json.device) {
      newInstance.device = json.device.map((x) => Reference.parse(x));
    }
    if (json.characteristics) {
      newInstance.characteristics = json.characteristics.map((x) => MedicinalProductPharmaceuticalCharacteristics.parse(x));
    }
    if (json.routeOfAdministration) {
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
  
  public getTypeName(): string {
    return "MedicinalProductPharmaceutical";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
