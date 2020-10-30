/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IVerificationResult,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  Status,
  Timing,
  VerificationResultAttestation,
  VerificationResultPrimarySource,
  VerificationResultValidator,
  FieldMetadata
} from "../internal";

export class VerificationResult extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "target",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "targetLocation",
      fieldType: [PrimitiveString],
      isArray: true
    }, {
      fieldName: "need",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [Status],
      isArray: false
    }, {
      fieldName: "statusDate",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "validationType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "validationProcess",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "frequency",
      fieldType: [Timing],
      isArray: false
    }, {
      fieldName: "lastPerformed",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "nextScheduled",
      fieldType: [PrimitiveDate],
      isArray: false
    }, {
      fieldName: "failureAction",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "primarySource",
      fieldType: [VerificationResultPrimarySource],
      isArray: true
    }, {
      fieldName: "attestation",
      fieldType: [VerificationResultAttestation],
      isArray: false
    }, {
      fieldName: "validator",
      fieldType: [VerificationResultValidator],
      isArray: true
    }];
  }

  public target?: Array<Reference>;

  public targetLocation?: Array<PrimitiveString>;

  public need?: CodeableConcept;

  public status?: Status;

  public statusDate?: PrimitiveDateTime;

  public validationType?: CodeableConcept;

  public validationProcess?: Array<CodeableConcept>;

  public frequency?: Timing;

  public lastPerformed?: PrimitiveDateTime;

  public nextScheduled?: PrimitiveDate;

  public failureAction?: CodeableConcept;

  public primarySource?: Array<VerificationResultPrimarySource>;

  public attestation?: VerificationResultAttestation;

  public validator?: Array<VerificationResultValidator>;

  public static parse(
    json: IVerificationResult,
    providedInstance: VerificationResult = new VerificationResult()
  ): VerificationResult {
    const newInstance: VerificationResult = DomainResource.parse(json, providedInstance);
  
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => Reference.parse(x));
    }
    if (json.targetLocation !== undefined) {
      newInstance.targetLocation = json.targetLocation.map((x, i) => {
        const ext = json._targetLocation && json._targetLocation[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.need !== undefined) {
      newInstance.need = CodeableConcept.parse(json.need);
    }
    if (json.status !== undefined) {
      newInstance.status = Status.parsePrimitive(json.status, json._status);
    }
    if (json.statusDate !== undefined) {
      newInstance.statusDate = PrimitiveDateTime.parsePrimitive(json.statusDate, json._statusDate);
    }
    if (json.validationType !== undefined) {
      newInstance.validationType = CodeableConcept.parse(json.validationType);
    }
    if (json.validationProcess !== undefined) {
      newInstance.validationProcess = json.validationProcess.map((x) => CodeableConcept.parse(x));
    }
    if (json.frequency !== undefined) {
      newInstance.frequency = Timing.parse(json.frequency);
    }
    if (json.lastPerformed !== undefined) {
      newInstance.lastPerformed = PrimitiveDateTime.parsePrimitive(json.lastPerformed, json._lastPerformed);
    }
    if (json.nextScheduled !== undefined) {
      newInstance.nextScheduled = PrimitiveDate.parsePrimitive(json.nextScheduled, json._nextScheduled);
    }
    if (json.failureAction !== undefined) {
      newInstance.failureAction = CodeableConcept.parse(json.failureAction);
    }
    if (json.primarySource !== undefined) {
      newInstance.primarySource = json.primarySource.map((x) => VerificationResultPrimarySource.parse(x));
    }
    if (json.attestation !== undefined) {
      newInstance.attestation = VerificationResultAttestation.parse(json.attestation);
    }
    if (json.validator !== undefined) {
      newInstance.validator = json.validator.map((x) => VerificationResultValidator.parse(x));
    }
    return newInstance;
  }

  public static isVerificationResult(input?: unknown): input is VerificationResult {
    const castInput = input as VerificationResult;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VerificationResult";
  }

  public toJSON(): IVerificationResult {
    const result: IVerificationResult = super.toJSON();

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    if (this.targetLocation) {
      result.targetLocation = this.targetLocation.filter(x => !!x).map(x => x.value) as typeof result.targetLocation;
      result._targetLocation = Extension.serializePrimitiveExtensionArray(this.targetLocation);
    }

    if (this.need) {
      result.need = this.need.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusDate) {
      result.statusDate = this.statusDate.value;
      result._statusDate = Extension.serializePrimitiveExtension(this.statusDate);
    }

    if (this.validationType) {
      result.validationType = this.validationType.toJSON();
    }

    if (this.validationProcess) {
      result.validationProcess = this.validationProcess.map((x) => x.toJSON());
    }

    if (this.frequency) {
      result.frequency = this.frequency.toJSON();
    }

    if (this.lastPerformed) {
      result.lastPerformed = this.lastPerformed.value;
      result._lastPerformed = Extension.serializePrimitiveExtension(this.lastPerformed);
    }

    if (this.nextScheduled) {
      result.nextScheduled = this.nextScheduled.value;
      result._nextScheduled = Extension.serializePrimitiveExtension(this.nextScheduled);
    }

    if (this.failureAction) {
      result.failureAction = this.failureAction.toJSON();
    }

    if (this.primarySource) {
      result.primarySource = this.primarySource.map((x) => x.toJSON());
    }

    if (this.attestation) {
      result.attestation = this.attestation.toJSON();
    }

    if (this.validator) {
      result.validator = this.validator.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): VerificationResult {
    return VerificationResult.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "VerificationResult";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
