/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DataRequirement,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  GuidanceResponseStatus,
  Identifier,
  IGuidanceResponse,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("GuidanceResponse", "DomainResource")
export class GuidanceResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuidanceResponse";

  static readonly primaryCodePath: string | null = "module";

  @FhirField("Identifier")
  public requestIdentifier?: Identifier;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirChoice("PrimitiveUri", "PrimitiveCanonical", "CodeableConcept")
  public module?: PrimitiveUri | PrimitiveCanonical | CodeableConcept;

  @FhirField("GuidanceResponseStatus")
  public status?: GuidanceResponseStatus;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public occurrenceDateTime?: PrimitiveDateTime;

  @FhirField("Reference")
  public performer?: Reference;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("Reference")
  public evaluationMessage?: Array<Reference>;

  @FhirField("Reference")
  public outputParameters?: Reference;

  @FhirField("Reference")
  public result?: Reference;

  @FhirList("DataRequirement")
  public dataRequirement?: Array<DataRequirement>;

  get primaryCode(): PrimitiveUri | PrimitiveCanonical | CodeableConcept | undefined {
    return this?.module;
  }

  set primaryCode(primaryCode: PrimitiveUri | PrimitiveCanonical | CodeableConcept | undefined) {
    this.module = primaryCode;
  }

  public static parse(
    json: IGuidanceResponse,
    providedInstance: GuidanceResponse = new GuidanceResponse()
  ): GuidanceResponse {
    const newInstance: GuidanceResponse = DomainResource.parse(json, providedInstance);
  
    if (json.requestIdentifier !== undefined) {
      newInstance.requestIdentifier = Identifier.parse(json.requestIdentifier);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.moduleUri !== undefined) {
      newInstance.module = PrimitiveUri.parsePrimitive(json.moduleUri, json._moduleUri);
    }
    if (json.moduleCanonical !== undefined) {
      newInstance.module = PrimitiveCanonical.parsePrimitive(json.moduleCanonical, json._moduleCanonical);
    }
    if (json.moduleCodeableConcept !== undefined) {
      newInstance.module = CodeableConcept.parse(json.moduleCodeableConcept);
    }
    if (json.status !== undefined) {
      newInstance.status = GuidanceResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrenceDateTime = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.performer !== undefined) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.evaluationMessage !== undefined) {
      newInstance.evaluationMessage = json.evaluationMessage.map((x) => Reference.parse(x));
    }
    if (json.outputParameters !== undefined) {
      newInstance.outputParameters = Reference.parse(json.outputParameters);
    }
    if (json.result !== undefined) {
      newInstance.result = Reference.parse(json.result);
    }
    if (json.dataRequirement !== undefined) {
      newInstance.dataRequirement = json.dataRequirement.map((x) => DataRequirement.parse(x));
    }
    return newInstance;
  }

  public static isGuidanceResponse(input?: unknown): input is GuidanceResponse {
    const castInput = input as GuidanceResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GuidanceResponse";
  }

  public toJSON(): IGuidanceResponse {
    const result: IGuidanceResponse = super.toJSON();

    if (this.requestIdentifier) {
      result.requestIdentifier = this.requestIdentifier.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.module && PrimitiveUri.isPrimitiveUri(this.module)) {
      result.moduleUri = this.module.value;
      result._moduleUri = Extension.serializePrimitiveExtension(this.module);
    }

    if (this.module && PrimitiveCanonical.isPrimitiveCanonical(this.module)) {
      result.moduleCanonical = this.module.value;
      result._moduleCanonical = Extension.serializePrimitiveExtension(this.module);
    }

    if (this.module && CodeableConcept.isCodeableConcept(this.module)) {
      result.moduleCodeableConcept = this.module.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.occurrenceDateTime) {
      result.occurrenceDateTime = this.occurrenceDateTime.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrenceDateTime);
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.evaluationMessage) {
      result.evaluationMessage = this.evaluationMessage.map((x) => x.toJSON());
    }

    if (this.outputParameters) {
      result.outputParameters = this.outputParameters.toJSON();
    }

    if (this.result) {
      result.result = this.result.toJSON();
    }

    if (this.dataRequirement) {
      result.dataRequirement = this.dataRequirement.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): GuidanceResponse {
    return GuidanceResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "GuidanceResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
