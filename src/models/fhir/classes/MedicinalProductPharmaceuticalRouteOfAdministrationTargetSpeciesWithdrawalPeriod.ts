/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  PrimitiveString,
  Quantity,
  FhirType
} from "../internal";

@FhirType("MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod", "BackboneElement")
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public tissue?: CodeableConcept;

  @FhirField("Quantity")
  public value?: Quantity;

  @FhirField("PrimitiveString")
  public supportingInformation?: PrimitiveString;

  public static parse(
    json: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
    providedInstance: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod()
  ): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const newInstance: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = BackboneElement.parse(json, providedInstance);
  
    if (json.tissue !== undefined) {
      newInstance.tissue = CodeableConcept.parse(json.tissue);
    }
    if (json.value !== undefined) {
      newInstance.value = Quantity.parse(json.value);
    }
    if (json.supportingInformation !== undefined) {
      newInstance.supportingInformation = PrimitiveString.parsePrimitive(json.supportingInformation, json._supportingInformation);
    }
    return newInstance;
  }

  public static isMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(input?: unknown): input is MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const castInput = input as MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod";
  }

  public toJSON(): IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    const result: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = super.toJSON();

    if (this.tissue) {
      result.tissue = this.tissue.toJSON();
    }

    if (this.value) {
      result.value = this.value.toJSON();
    }

    if (this.supportingInformation) {
      result.supportingInformation = this.supportingInformation.value;
      result._supportingInformation = Extension.serializePrimitiveExtension(this.supportingInformation);
    }

    return result;
  }

  public clone(): MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    return MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
