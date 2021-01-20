/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  FhirType
} from "../internal";

@FhirType("MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies", "BackboneElement")
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod")
  public withdrawalPeriod?: Array<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>;

  public static parse(
    json: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
    providedInstance: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies()
  ): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const newInstance: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.withdrawalPeriod !== undefined) {
      newInstance.withdrawalPeriod = json.withdrawalPeriod.map((x) => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(input?: unknown): input is MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const castInput = input as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies";
  }

  public toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    const result: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.withdrawalPeriod) {
      result.withdrawalPeriod = this.withdrawalPeriod.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    return MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
