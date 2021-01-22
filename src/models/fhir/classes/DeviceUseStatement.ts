/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DeviceUseStatementStatus,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  Identifier,
  IDeviceUseStatement,
  Period,
  PrimitiveDateTime,
  Reference,
  Timing,
  FhirType
} from "../internal";

@FhirType("DeviceUseStatement", "DomainResource")
export class DeviceUseStatement extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceUseStatement";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirField("DeviceUseStatementStatus")
  public status?: DeviceUseStatementStatus;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirList("Reference")
  public derivedFrom?: Array<Reference>;

  @FhirChoice("Timing", "Period", "PrimitiveDateTime")
  public timing?: Timing | Period | PrimitiveDateTime;

  @FhirField("PrimitiveDateTime")
  public recordedOn?: PrimitiveDateTime;

  @FhirField("Reference")
  public source?: Reference;

  @FhirField("Reference")
  public device?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirField("CodeableConcept")
  public bodySite?: CodeableConcept;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  public static parse(
    json: IDeviceUseStatement,
    providedInstance: DeviceUseStatement = new DeviceUseStatement()
  ): DeviceUseStatement {
    const newInstance: DeviceUseStatement = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = DeviceUseStatementStatus.parsePrimitive(json.status, json._status);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.derivedFrom !== undefined) {
      newInstance.derivedFrom = json.derivedFrom.map((x) => Reference.parse(x));
    }
    if (json.timingTiming !== undefined) {
      newInstance.timing = Timing.parse(json.timingTiming);
    }
    if (json.timingPeriod !== undefined) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.timingDateTime !== undefined) {
      newInstance.timing = PrimitiveDateTime.parsePrimitive(json.timingDateTime, json._timingDateTime);
    }
    if (json.recordedOn !== undefined) {
      newInstance.recordedOn = PrimitiveDateTime.parsePrimitive(json.recordedOn, json._recordedOn);
    }
    if (json.source !== undefined) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.device !== undefined) {
      newInstance.device = Reference.parse(json.device);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isDeviceUseStatement(input?: unknown): input is DeviceUseStatement {
    const castInput = input as DeviceUseStatement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceUseStatement";
  }

  public toJSON(): IDeviceUseStatement {
    const result: IDeviceUseStatement = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.derivedFrom) {
      result.derivedFrom = this.derivedFrom.map((x) => x.toJSON());
    }

    if (this.timing && Timing.isTiming(this.timing)) {
      result.timingTiming = this.timing.toJSON();
    }

    if (this.timing && Period.isPeriod(this.timing)) {
      result.timingPeriod = this.timing.toJSON();
    }

    if (this.timing && PrimitiveDateTime.isPrimitiveDateTime(this.timing)) {
      result.timingDateTime = this.timing.value;
      result._timingDateTime = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.recordedOn) {
      result.recordedOn = this.recordedOn.value;
      result._recordedOn = Extension.serializePrimitiveExtension(this.recordedOn);
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.device) {
      result.device = this.device.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DeviceUseStatement {
    return DeviceUseStatement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceUseStatement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
