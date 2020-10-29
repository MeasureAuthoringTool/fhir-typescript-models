/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DetectedIssueEvidence,
  DetectedIssueMitigation,
  DetectedIssueSeverity,
  DetectedIssueStatus,
  DomainResource,
  Extension,
  Identifier,
  IDetectedIssue,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FieldMetadata
} from "../internal";

export class DetectedIssue extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssue";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [DetectedIssueStatus],
      isArray: false
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "severity",
      fieldType: [DetectedIssueSeverity],
      isArray: false
    }, {
      fieldName: "patient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "identified",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }, {
      fieldName: "author",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "implicated",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "evidence",
      fieldType: [DetectedIssueEvidence],
      isArray: true
    }, {
      fieldName: "detail",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "reference",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "mitigation",
      fieldType: [DetectedIssueMitigation],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: DetectedIssueStatus;

  public code?: CodeableConcept;

  public severity?: DetectedIssueSeverity;

  public patient?: Reference;

  public identified?: PrimitiveDateTime | Period;

  public author?: Reference;

  public implicated?: Array<Reference>;

  public evidence?: Array<DetectedIssueEvidence>;

  public detail?: PrimitiveString;

  public reference?: PrimitiveUri;

  public mitigation?: Array<DetectedIssueMitigation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IDetectedIssue,
    providedInstance: DetectedIssue = new DetectedIssue()
  ): DetectedIssue {
    const newInstance: DetectedIssue = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = DetectedIssueStatus.parsePrimitive(json.status, json._status);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.severity !== undefined) {
      newInstance.severity = DetectedIssueSeverity.parsePrimitive(json.severity, json._severity);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.identifiedDateTime !== undefined) {
      newInstance.identified = PrimitiveDateTime.parsePrimitive(json.identifiedDateTime, json._identifiedDateTime);
    }
    if (json.identifiedPeriod !== undefined) {
      newInstance.identified = Period.parse(json.identifiedPeriod);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.implicated !== undefined) {
      newInstance.implicated = json.implicated.map((x) => Reference.parse(x));
    }
    if (json.evidence !== undefined) {
      newInstance.evidence = json.evidence.map((x) => DetectedIssueEvidence.parse(x));
    }
    if (json.detail !== undefined) {
      newInstance.detail = PrimitiveString.parsePrimitive(json.detail, json._detail);
    }
    if (json.reference !== undefined) {
      newInstance.reference = PrimitiveUri.parsePrimitive(json.reference, json._reference);
    }
    if (json.mitigation !== undefined) {
      newInstance.mitigation = json.mitigation.map((x) => DetectedIssueMitigation.parse(x));
    }
    return newInstance;
  }

  public static isDetectedIssue(input?: unknown): input is DetectedIssue {
    const castInput = input as DetectedIssue;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DetectedIssue";
  }

  public toJSON(): IDetectedIssue {
    const result: IDetectedIssue = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.severity) {
      result.severity = this.severity.value;
      result._severity = Extension.serializePrimitiveExtension(this.severity);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.identified && PrimitiveDateTime.isPrimitiveDateTime(this.identified)) {
      result.identifiedDateTime = this.identified.value;
      result._identifiedDateTime = Extension.serializePrimitiveExtension(this.identified);
    }

    if (this.identified && Period.isPeriod(this.identified)) {
      result.identifiedPeriod = this.identified.toJSON();
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.implicated) {
      result.implicated = this.implicated.map((x) => x.toJSON());
    }

    if (this.evidence) {
      result.evidence = this.evidence.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.value;
      result._detail = Extension.serializePrimitiveExtension(this.detail);
    }

    if (this.reference) {
      result.reference = this.reference.value;
      result._reference = Extension.serializePrimitiveExtension(this.reference);
    }

    if (this.mitigation) {
      result.mitigation = this.mitigation.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DetectedIssue {
    return DetectedIssue.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DetectedIssue";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
