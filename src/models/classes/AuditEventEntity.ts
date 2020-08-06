/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AuditEventEntityDetail,
  BackboneElement,
  Coding,
  Extension,
  IAuditEventEntity,
  PrimitiveBase64Binary,
  PrimitiveString,
  Reference,
} from "../internal";

export class AuditEventEntity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Entity";

  public what?: Reference;

  public type?: Coding;

  public role?: Coding;

  public lifecycle?: Coding;

  public securityLabel?: Array<Coding>;

  public name?: PrimitiveString;

  public description?: PrimitiveString;

  public query?: PrimitiveBase64Binary;

  public detail?: Array<AuditEventEntityDetail>;

  public static parse(
    json: IAuditEventEntity,
    providedInstance: AuditEventEntity = new AuditEventEntity()
  ): AuditEventEntity {
    const newInstance: AuditEventEntity = BackboneElement.parse(json, providedInstance);
  
    if (json.what) {
      newInstance.what = Reference.parse(json.what);
    }
    if (json.type) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.role) {
      newInstance.role = Coding.parse(json.role);
    }
    if (json.lifecycle) {
      newInstance.lifecycle = Coding.parse(json.lifecycle);
    }
    if (json.securityLabel) {
      newInstance.securityLabel = json.securityLabel.map((x) => Coding.parse(x));
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.query) {
      newInstance.query = PrimitiveBase64Binary.parsePrimitive(json.query, json._query);
    }
    if (json.detail) {
      newInstance.detail = json.detail.map((x) => AuditEventEntityDetail.parse(x));
    }
    return newInstance;
  }

  public static isAuditEventEntity(input?: unknown): input is AuditEventEntity {
    const castInput = input as AuditEventEntity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventEntity";
  }

  public toJSON(): IAuditEventEntity {
    const result: IAuditEventEntity = super.toJSON();

    if (this.what) {
      result.what = this.what.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.lifecycle) {
      result.lifecycle = this.lifecycle.toJSON();
    }

    if (this.securityLabel) {
      result.securityLabel = this.securityLabel.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.query) {
      result.query = this.query.value;
      result._query = Extension.serializePrimitiveExtension(this.query);
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AuditEventEntity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
