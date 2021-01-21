/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  EncounterLocationStatus,
  Extension,
  FhirField,
  IEncounterLocation,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("EncounterLocation", "BackboneElement")
export class EncounterLocation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Location";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public location?: Reference;

  @FhirField("EncounterLocationStatus")
  public status?: EncounterLocationStatus;

  @FhirField("CodeableConcept")
  public physicalType?: CodeableConcept;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IEncounterLocation,
    providedInstance: EncounterLocation = new EncounterLocation()
  ): EncounterLocation {
    const newInstance: EncounterLocation = BackboneElement.parse(json, providedInstance);
  
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.status !== undefined) {
      newInstance.status = EncounterLocationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.physicalType !== undefined) {
      newInstance.physicalType = CodeableConcept.parse(json.physicalType);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isEncounterLocation(input?: unknown): input is EncounterLocation {
    const castInput = input as EncounterLocation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterLocation";
  }

  public toJSON(): IEncounterLocation {
    const result: IEncounterLocation = super.toJSON();

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.physicalType) {
      result.physicalType = this.physicalType.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): EncounterLocation {
    return EncounterLocation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterLocation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
