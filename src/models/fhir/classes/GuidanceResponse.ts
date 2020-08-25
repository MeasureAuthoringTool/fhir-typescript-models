/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  DataRequirement,
  DomainResource,
  Extension,
  GuidanceResponseStatus,
  Identifier,
  IGuidanceResponse,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
} from "../internal";

export class GuidanceResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GuidanceResponse";

  public requestIdentifier?: Identifier;

  public identifier?: Array<Identifier>;

  public module?: PrimitiveUri | PrimitiveCanonical | CodeableConcept;

  public status?: GuidanceResponseStatus;

  public subject?: Reference;

  public encounter?: Reference;

  public occurrenceDateTime?: PrimitiveDateTime;

  public performer?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public note?: Array<Annotation>;

  public evaluationMessage?: Array<Reference>;

  public outputParameters?: Reference;

  public result?: Reference;

  public dataRequirement?: Array<DataRequirement>;

  public static parse(
    json: IGuidanceResponse,
    providedInstance: GuidanceResponse = new GuidanceResponse()
  ): GuidanceResponse {
    const newInstance: GuidanceResponse = DomainResource.parse(json, providedInstance);
  
    if (json.requestIdentifier) {
      newInstance.requestIdentifier = Identifier.parse(json.requestIdentifier);
    }
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.moduleUri) {
      newInstance.module = PrimitiveUri.parsePrimitive(json.moduleUri, json._moduleUri);
    }
    if (json.moduleCanonical) {
      newInstance.module = PrimitiveCanonical.parsePrimitive(json.moduleCanonical, json._moduleCanonical);
    }
    if (json.moduleCodeableConcept) {
      newInstance.module = CodeableConcept.parse(json.moduleCodeableConcept);
    }
    if (json.status) {
      newInstance.status = GuidanceResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrenceDateTime = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.performer) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.evaluationMessage) {
      newInstance.evaluationMessage = json.evaluationMessage.map((x) => Reference.parse(x));
    }
    if (json.outputParameters) {
      newInstance.outputParameters = Reference.parse(json.outputParameters);
    }
    if (json.result) {
      newInstance.result = Reference.parse(json.result);
    }
    if (json.dataRequirement) {
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
  
  public getTypeName(): string {
    return "GuidanceResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
