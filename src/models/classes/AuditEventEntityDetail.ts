/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IAuditEventEntityDetail,
  PrimitiveBase64Binary,
  PrimitiveString,
} from "../internal";

export class AuditEventEntityDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Entity.Detail";

  public type?: PrimitiveString;

  public value?: PrimitiveString | PrimitiveBase64Binary;

  public static parse(
    json: IAuditEventEntityDetail,
    providedInstance: AuditEventEntityDetail = new AuditEventEntityDetail()
  ): AuditEventEntityDetail {
    const newInstance: AuditEventEntityDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = PrimitiveString.parsePrimitive(json.type, json._type);
    }
    if (json.valueString) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueBase64Binary) {
      newInstance.value = PrimitiveBase64Binary.parsePrimitive(json.valueBase64Binary, json._valueBase64Binary);
    }
    return newInstance;
  }

  public static isAuditEventEntityDetail(input?: unknown): input is AuditEventEntityDetail {
    const castInput = input as AuditEventEntityDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventEntityDetail";
  }

  public toJSON(): IAuditEventEntityDetail {
    const result: IAuditEventEntityDetail = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBase64Binary.isPrimitiveBase64Binary(this.value)) {
      result.valueBase64Binary = this.value.value;
      result._valueBase64Binary = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "AuditEventEntityDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
