/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  EnrollmentRequestStatus,
  Extension,
  Identifier,
  IEnrollmentRequest,
  PrimitiveDateTime,
  Reference,
  FieldMetadata
} from "../internal";

export class EnrollmentRequest extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentRequest";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [EnrollmentRequestStatus],
      isArray: false
    }, {
      fieldName: "created",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "insurer",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "provider",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "candidate",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "coverage",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: EnrollmentRequestStatus;

  public created?: PrimitiveDateTime;

  public insurer?: Reference;

  public provider?: Reference;

  public candidate?: Reference;

  public coverage?: Reference;

  public static parse(
    json: IEnrollmentRequest,
    providedInstance: EnrollmentRequest = new EnrollmentRequest()
  ): EnrollmentRequest {
    const newInstance: EnrollmentRequest = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EnrollmentRequestStatus.parsePrimitive(json.status, json._status);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.insurer !== undefined) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.candidate !== undefined) {
      newInstance.candidate = Reference.parse(json.candidate);
    }
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    return newInstance;
  }

  public static isEnrollmentRequest(input?: unknown): input is EnrollmentRequest {
    const castInput = input as EnrollmentRequest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnrollmentRequest";
  }

  public toJSON(): IEnrollmentRequest {
    const result: IEnrollmentRequest = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.insurer) {
      result.insurer = this.insurer.toJSON();
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.candidate) {
      result.candidate = this.candidate.toJSON();
    }

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    return result;
  }

  public clone(): EnrollmentRequest {
    return EnrollmentRequest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EnrollmentRequest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
