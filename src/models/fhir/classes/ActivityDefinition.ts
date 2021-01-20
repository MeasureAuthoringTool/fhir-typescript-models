/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ActivityDefinitionDynamicValue,
  ActivityDefinitionKind,
  ActivityDefinitionParticipant,
  Age,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Dosage,
  Duration,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IActivityDefinition,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDate,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  Range,
  Reference,
  RelatedArtifact,
  RequestIntent,
  RequestPriority,
  SimpleQuantity,
  Timing,
  UsageContext,
  FhirType
} from "../internal";

@FhirType("ActivityDefinition", "DomainResource")
export class ActivityDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActivityDefinition";

  static readonly primaryCodePath: string | null = "topic";

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveString")
  public subtitle?: PrimitiveString;

  @FhirField("PublicationStatus")
  public status?: PublicationStatus;

  @FhirField("PrimitiveBoolean")
  public experimental?: PrimitiveBoolean;

  @FhirChoice("CodeableConcept", "Reference")
  public subject?: CodeableConcept | Reference;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("PrimitiveString")
  public publisher?: PrimitiveString;

  @FhirList("ContactDetail")
  public contact?: Array<ContactDetail>;

  @FhirField("PrimitiveMarkdown")
  public description?: PrimitiveMarkdown;

  @FhirList("UsageContext")
  public useContext?: Array<UsageContext>;

  @FhirList("CodeableConcept")
  public jurisdiction?: Array<CodeableConcept>;

  @FhirField("PrimitiveMarkdown")
  public purpose?: PrimitiveMarkdown;

  @FhirField("PrimitiveString")
  public usage?: PrimitiveString;

  @FhirField("PrimitiveMarkdown")
  public copyright?: PrimitiveMarkdown;

  @FhirField("PrimitiveDate")
  public approvalDate?: PrimitiveDate;

  @FhirField("PrimitiveDate")
  public lastReviewDate?: PrimitiveDate;

  @FhirField("Period")
  public effectivePeriod?: Period;

  @FhirList("CodeableConcept")
  public topic?: Array<CodeableConcept>;

  @FhirList("ContactDetail")
  public author?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public editor?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public reviewer?: Array<ContactDetail>;

  @FhirList("ContactDetail")
  public endorser?: Array<ContactDetail>;

  @FhirList("RelatedArtifact")
  public relatedArtifact?: Array<RelatedArtifact>;

  @FhirList("PrimitiveCanonical")
  public library?: Array<PrimitiveCanonical>;

  @FhirField("ActivityDefinitionKind")
  public kind?: ActivityDefinitionKind;

  @FhirField("PrimitiveCanonical")
  public profile?: PrimitiveCanonical;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("RequestIntent")
  public intent?: RequestIntent;

  @FhirField("RequestPriority")
  public priority?: RequestPriority;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirChoice("Timing", "PrimitiveDateTime", "Age", "Period", "Range", "Duration")
  public timing?: Timing | PrimitiveDateTime | Age | Period | Range | Duration;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("ActivityDefinitionParticipant")
  public participant?: Array<ActivityDefinitionParticipant>;

  @FhirChoice("Reference", "CodeableConcept")
  public product?: Reference | CodeableConcept;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirList("Dosage")
  public dosage?: Array<Dosage>;

  @FhirList("CodeableConcept")
  public bodySite?: Array<CodeableConcept>;

  @FhirList("Reference")
  public specimenRequirement?: Array<Reference>;

  @FhirList("Reference")
  public observationRequirement?: Array<Reference>;

  @FhirList("Reference")
  public observationResultRequirement?: Array<Reference>;

  @FhirField("PrimitiveCanonical")
  public transform?: PrimitiveCanonical;

  @FhirList("ActivityDefinitionDynamicValue")
  public dynamicValue?: Array<ActivityDefinitionDynamicValue>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.topic?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.topic = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IActivityDefinition,
    providedInstance: ActivityDefinition = new ActivityDefinition()
  ): ActivityDefinition {
    const newInstance: ActivityDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.subtitle !== undefined) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.subjectCodeableConcept !== undefined) {
      newInstance.subject = CodeableConcept.parse(json.subjectCodeableConcept);
    }
    if (json.subjectReference !== undefined) {
      newInstance.subject = Reference.parse(json.subjectReference);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher !== undefined) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext !== undefined) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.usage !== undefined) {
      newInstance.usage = PrimitiveString.parsePrimitive(json.usage, json._usage);
    }
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.approvalDate !== undefined) {
      newInstance.approvalDate = PrimitiveDate.parsePrimitive(json.approvalDate, json._approvalDate);
    }
    if (json.lastReviewDate !== undefined) {
      newInstance.lastReviewDate = PrimitiveDate.parsePrimitive(json.lastReviewDate, json._lastReviewDate);
    }
    if (json.effectivePeriod !== undefined) {
      newInstance.effectivePeriod = Period.parse(json.effectivePeriod);
    }
    if (json.topic !== undefined) {
      newInstance.topic = json.topic.map((x) => CodeableConcept.parse(x));
    }
    if (json.author !== undefined) {
      newInstance.author = json.author.map((x) => ContactDetail.parse(x));
    }
    if (json.editor !== undefined) {
      newInstance.editor = json.editor.map((x) => ContactDetail.parse(x));
    }
    if (json.reviewer !== undefined) {
      newInstance.reviewer = json.reviewer.map((x) => ContactDetail.parse(x));
    }
    if (json.endorser !== undefined) {
      newInstance.endorser = json.endorser.map((x) => ContactDetail.parse(x));
    }
    if (json.relatedArtifact !== undefined) {
      newInstance.relatedArtifact = json.relatedArtifact.map((x) => RelatedArtifact.parse(x));
    }
    if (json.library !== undefined) {
      newInstance.library = json.library.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._library?.[i]));
    }
    if (json.kind !== undefined) {
      newInstance.kind = ActivityDefinitionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.profile !== undefined) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.intent !== undefined) {
      newInstance.intent = RequestIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.priority !== undefined) {
      newInstance.priority = RequestPriority.parsePrimitive(json.priority, json._priority);
    }
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.timingTiming !== undefined) {
      newInstance.timing = Timing.parse(json.timingTiming);
    }
    if (json.timingDateTime !== undefined) {
      newInstance.timing = PrimitiveDateTime.parsePrimitive(json.timingDateTime, json._timingDateTime);
    }
    if (json.timingAge !== undefined) {
      newInstance.timing = Age.parse(json.timingAge);
    }
    if (json.timingPeriod !== undefined) {
      newInstance.timing = Period.parse(json.timingPeriod);
    }
    if (json.timingRange !== undefined) {
      newInstance.timing = Range.parse(json.timingRange);
    }
    if (json.timingDuration !== undefined) {
      newInstance.timing = Duration.parse(json.timingDuration);
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => ActivityDefinitionParticipant.parse(x));
    }
    if (json.productReference !== undefined) {
      newInstance.product = Reference.parse(json.productReference);
    }
    if (json.productCodeableConcept !== undefined) {
      newInstance.product = CodeableConcept.parse(json.productCodeableConcept);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.dosage !== undefined) {
      newInstance.dosage = json.dosage.map((x) => Dosage.parse(x));
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = json.bodySite.map((x) => CodeableConcept.parse(x));
    }
    if (json.specimenRequirement !== undefined) {
      newInstance.specimenRequirement = json.specimenRequirement.map((x) => Reference.parse(x));
    }
    if (json.observationRequirement !== undefined) {
      newInstance.observationRequirement = json.observationRequirement.map((x) => Reference.parse(x));
    }
    if (json.observationResultRequirement !== undefined) {
      newInstance.observationResultRequirement = json.observationResultRequirement.map((x) => Reference.parse(x));
    }
    if (json.transform !== undefined) {
      newInstance.transform = PrimitiveCanonical.parsePrimitive(json.transform, json._transform);
    }
    if (json.dynamicValue !== undefined) {
      newInstance.dynamicValue = json.dynamicValue.map((x) => ActivityDefinitionDynamicValue.parse(x));
    }
    return newInstance;
  }

  public static isActivityDefinition(input?: unknown): input is ActivityDefinition {
    const castInput = input as ActivityDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActivityDefinition";
  }

  public toJSON(): IActivityDefinition {
    const result: IActivityDefinition = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.subtitle) {
      result.subtitle = this.subtitle.value;
      result._subtitle = Extension.serializePrimitiveExtension(this.subtitle);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.subject && CodeableConcept.isCodeableConcept(this.subject)) {
      result.subjectCodeableConcept = this.subject.toJSON();
    }

    if (this.subject && Reference.isReference(this.subject)) {
      result.subjectReference = this.subject.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.publisher) {
      result.publisher = this.publisher.value;
      result._publisher = Extension.serializePrimitiveExtension(this.publisher);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.usage) {
      result.usage = this.usage.value;
      result._usage = Extension.serializePrimitiveExtension(this.usage);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.approvalDate) {
      result.approvalDate = this.approvalDate.value;
      result._approvalDate = Extension.serializePrimitiveExtension(this.approvalDate);
    }

    if (this.lastReviewDate) {
      result.lastReviewDate = this.lastReviewDate.value;
      result._lastReviewDate = Extension.serializePrimitiveExtension(this.lastReviewDate);
    }

    if (this.effectivePeriod) {
      result.effectivePeriod = this.effectivePeriod.toJSON();
    }

    if (this.topic) {
      result.topic = this.topic.map((x) => x.toJSON());
    }

    if (this.author) {
      result.author = this.author.map((x) => x.toJSON());
    }

    if (this.editor) {
      result.editor = this.editor.map((x) => x.toJSON());
    }

    if (this.reviewer) {
      result.reviewer = this.reviewer.map((x) => x.toJSON());
    }

    if (this.endorser) {
      result.endorser = this.endorser.map((x) => x.toJSON());
    }

    if (this.relatedArtifact) {
      result.relatedArtifact = this.relatedArtifact.map((x) => x.toJSON());
    }

    if (this.library) {
      result.library = this.library.filter(x => !!x).map(x => x.value) as typeof result.library;
      result._library = Extension.serializePrimitiveExtensionArray(this.library);
    }

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.priority) {
      result.priority = this.priority.value;
      result._priority = Extension.serializePrimitiveExtension(this.priority);
    }

    if (this.doNotPerform) {
      result.doNotPerform = this.doNotPerform.value;
      result._doNotPerform = Extension.serializePrimitiveExtension(this.doNotPerform);
    }

    if (this.timing && Timing.isTiming(this.timing)) {
      result.timingTiming = this.timing.toJSON();
    }

    if (this.timing && PrimitiveDateTime.isPrimitiveDateTime(this.timing)) {
      result.timingDateTime = this.timing.value;
      result._timingDateTime = Extension.serializePrimitiveExtension(this.timing);
    }

    if (this.timing && Age.isAge(this.timing)) {
      result.timingAge = this.timing.toJSON();
    }

    if (this.timing && Period.isPeriod(this.timing)) {
      result.timingPeriod = this.timing.toJSON();
    }

    if (this.timing && Range.isRange(this.timing)) {
      result.timingRange = this.timing.toJSON();
    }

    if (this.timing && Duration.isDuration(this.timing)) {
      result.timingDuration = this.timing.toJSON();
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.product && Reference.isReference(this.product)) {
      result.productReference = this.product.toJSON();
    }

    if (this.product && CodeableConcept.isCodeableConcept(this.product)) {
      result.productCodeableConcept = this.product.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.dosage) {
      result.dosage = this.dosage.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.map((x) => x.toJSON());
    }

    if (this.specimenRequirement) {
      result.specimenRequirement = this.specimenRequirement.map((x) => x.toJSON());
    }

    if (this.observationRequirement) {
      result.observationRequirement = this.observationRequirement.map((x) => x.toJSON());
    }

    if (this.observationResultRequirement) {
      result.observationResultRequirement = this.observationResultRequirement.map((x) => x.toJSON());
    }

    if (this.transform) {
      result.transform = this.transform.value;
      result._transform = Extension.serializePrimitiveExtension(this.transform);
    }

    if (this.dynamicValue) {
      result.dynamicValue = this.dynamicValue.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ActivityDefinition {
    return ActivityDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ActivityDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
