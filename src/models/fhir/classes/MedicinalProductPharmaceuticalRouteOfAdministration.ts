/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Duration,
  IMedicinalProductPharmaceuticalRouteOfAdministration,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  Quantity,
  Ratio,
} from "../internal";

export class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical.RouteOfAdministration";
  
  static readonly primaryCodePath: string | null = null;

  public code?: CodeableConcept;

  public firstDose?: Quantity;

  public maxSingleDose?: Quantity;

  public maxDosePerDay?: Quantity;

  public maxDosePerTreatmentPeriod?: Ratio;

  public maxTreatmentPeriod?: Duration;

  public targetSpecies?: Array<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>;

  public static parse(
    json: IMedicinalProductPharmaceuticalRouteOfAdministration,
    providedInstance: MedicinalProductPharmaceuticalRouteOfAdministration = new MedicinalProductPharmaceuticalRouteOfAdministration()
  ): MedicinalProductPharmaceuticalRouteOfAdministration {
    const newInstance: MedicinalProductPharmaceuticalRouteOfAdministration = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.firstDose !== undefined) {
      newInstance.firstDose = Quantity.parse(json.firstDose);
    }
    if (json.maxSingleDose !== undefined) {
      newInstance.maxSingleDose = Quantity.parse(json.maxSingleDose);
    }
    if (json.maxDosePerDay !== undefined) {
      newInstance.maxDosePerDay = Quantity.parse(json.maxDosePerDay);
    }
    if (json.maxDosePerTreatmentPeriod !== undefined) {
      newInstance.maxDosePerTreatmentPeriod = Ratio.parse(json.maxDosePerTreatmentPeriod);
    }
    if (json.maxTreatmentPeriod !== undefined) {
      newInstance.maxTreatmentPeriod = Duration.parse(json.maxTreatmentPeriod);
    }
    if (json.targetSpecies !== undefined) {
      newInstance.targetSpecies = json.targetSpecies.map((x) => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductPharmaceuticalRouteOfAdministration(input?: unknown): input is MedicinalProductPharmaceuticalRouteOfAdministration {
    const castInput = input as MedicinalProductPharmaceuticalRouteOfAdministration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPharmaceuticalRouteOfAdministration";
  }

  public toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministration {
    const result: IMedicinalProductPharmaceuticalRouteOfAdministration = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.firstDose) {
      result.firstDose = this.firstDose.toJSON();
    }

    if (this.maxSingleDose) {
      result.maxSingleDose = this.maxSingleDose.toJSON();
    }

    if (this.maxDosePerDay) {
      result.maxDosePerDay = this.maxDosePerDay.toJSON();
    }

    if (this.maxDosePerTreatmentPeriod) {
      result.maxDosePerTreatmentPeriod = this.maxDosePerTreatmentPeriod.toJSON();
    }

    if (this.maxTreatmentPeriod) {
      result.maxTreatmentPeriod = this.maxTreatmentPeriod.toJSON();
    }

    if (this.targetSpecies) {
      result.targetSpecies = this.targetSpecies.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductPharmaceuticalRouteOfAdministration {
    return MedicinalProductPharmaceuticalRouteOfAdministration.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPharmaceuticalRouteOfAdministration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
