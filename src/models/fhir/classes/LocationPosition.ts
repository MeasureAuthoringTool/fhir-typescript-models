/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ILocationPosition,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("LocationPosition", "BackboneElement")
export class LocationPosition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Location.Position";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDecimal")
  public longitude?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public latitude?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public altitude?: PrimitiveDecimal;

  public static parse(
    json: ILocationPosition,
    providedInstance: LocationPosition = new LocationPosition()
  ): LocationPosition {
    const newInstance: LocationPosition = BackboneElement.parse(json, providedInstance);
  
    if (json.longitude !== undefined) {
      newInstance.longitude = PrimitiveDecimal.parsePrimitive(json.longitude, json._longitude);
    }
    if (json.latitude !== undefined) {
      newInstance.latitude = PrimitiveDecimal.parsePrimitive(json.latitude, json._latitude);
    }
    if (json.altitude !== undefined) {
      newInstance.altitude = PrimitiveDecimal.parsePrimitive(json.altitude, json._altitude);
    }
    return newInstance;
  }

  public static isLocationPosition(input?: unknown): input is LocationPosition {
    const castInput = input as LocationPosition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LocationPosition";
  }

  public toJSON(): ILocationPosition {
    const result: ILocationPosition = super.toJSON();

    if (this.longitude) {
      result.longitude = this.longitude.value;
      result._longitude = Extension.serializePrimitiveExtension(this.longitude);
    }

    if (this.latitude) {
      result.latitude = this.latitude.value;
      result._latitude = Extension.serializePrimitiveExtension(this.latitude);
    }

    if (this.altitude) {
      result.altitude = this.altitude.value;
      result._altitude = Extension.serializePrimitiveExtension(this.altitude);
    }

    return result;
  }

  public clone(): LocationPosition {
    return LocationPosition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "LocationPosition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
