/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  FhirList,
  IAuditEventSource,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("AuditEventSource", "BackboneElement")
export class AuditEventSource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Source";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public site?: PrimitiveString;

  @FhirField("Reference")
  public observer?: Reference;

  @FhirList("Coding")
  public type?: Array<Coding>;

  public static parse(
    json: IAuditEventSource,
    providedInstance: AuditEventSource = new AuditEventSource()
  ): AuditEventSource {
    const newInstance: AuditEventSource = BackboneElement.parse(json, providedInstance);
  
    if (json.site !== undefined) {
      newInstance.site = PrimitiveString.parsePrimitive(json.site, json._site);
    }
    if (json.observer !== undefined) {
      newInstance.observer = Reference.parse(json.observer);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => Coding.parse(x));
    }
    return newInstance;
  }

  public static isAuditEventSource(input?: unknown): input is AuditEventSource {
    const castInput = input as AuditEventSource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventSource";
  }

  public toJSON(): IAuditEventSource {
    const result: IAuditEventSource = super.toJSON();

    if (this.site) {
      result.site = this.site.value;
      result._site = Extension.serializePrimitiveExtension(this.site);
    }

    if (this.observer) {
      result.observer = this.observer.toJSON();
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): AuditEventSource {
    return AuditEventSource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AuditEventSource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
