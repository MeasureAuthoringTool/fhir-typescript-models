/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
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
  FhirType
} from "../internal";

@FhirType("VerificationResult", "DomainResource")
export class VerificationResult extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VerificationResult";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public target?: Array<Reference>;

  @FhirList("PrimitiveString")
  public targetLocation?: Array<PrimitiveString>;

  @FhirField("CodeableConcept")
  public need?: CodeableConcept;

  @FhirField("Status")
  public status?: Status;

  @FhirField("PrimitiveDateTime")
  public statusDate?: PrimitiveDateTime;

  @FhirField("CodeableConcept")
  public validationType?: CodeableConcept;

  @FhirList("CodeableConcept")
  public validationProcess?: Array<CodeableConcept>;

  @FhirField("Timing")
  public frequency?: Timing;

  @FhirField("PrimitiveDateTime")
  public lastPerformed?: PrimitiveDateTime;

  @FhirField("PrimitiveDate")
  public nextScheduled?: PrimitiveDate;

  @FhirField("CodeableConcept")
  public failureAction?: CodeableConcept;

  @FhirList("VerificationResultPrimarySource")
  public primarySource?: Array<VerificationResultPrimarySource>;

  @FhirField("VerificationResultAttestation")
  public attestation?: VerificationResultAttestation;

  @FhirList("VerificationResultValidator")
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
      newInstance.targetLocation = json.targetLocation.map((x, i) => PrimitiveString.parsePrimitive(x, json._targetLocation?.[i]));
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
