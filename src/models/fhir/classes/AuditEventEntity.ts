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
  FieldMetadata
} from "../internal";

export class AuditEventEntity extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Entity";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "what",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [Coding],
      isArray: false
    }, {
      fieldName: "role",
      fieldType: [Coding],
      isArray: false
    }, {
      fieldName: "lifecycle",
      fieldType: [Coding],
      isArray: false
    }, {
      fieldName: "securityLabel",
      fieldType: [Coding],
      isArray: true
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "query",
      fieldType: [PrimitiveBase64Binary],
      isArray: false
    }, {
      fieldName: "detail",
      fieldType: [AuditEventEntityDetail],
      isArray: true
    }];
  }

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
  
    if (json.what !== undefined) {
      newInstance.what = Reference.parse(json.what);
    }
    if (json.type !== undefined) {
      newInstance.type = Coding.parse(json.type);
    }
    if (json.role !== undefined) {
      newInstance.role = Coding.parse(json.role);
    }
    if (json.lifecycle !== undefined) {
      newInstance.lifecycle = Coding.parse(json.lifecycle);
    }
    if (json.securityLabel !== undefined) {
      newInstance.securityLabel = json.securityLabel.map((x) => Coding.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.query !== undefined) {
      newInstance.query = PrimitiveBase64Binary.parsePrimitive(json.query, json._query);
    }
    if (json.detail !== undefined) {
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

  public clone(): AuditEventEntity {
    return AuditEventEntity.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AuditEventEntity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
