/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CarePlanActivity,
  CarePlanIntent,
  CarePlanStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  ICarePlan,
  Identifier,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
} from "../internal";

export class CarePlan extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlan";

  public identifier?: Array<Identifier>;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public basedOn?: Array<Reference>;

  public replaces?: Array<Reference>;

  public partOf?: Array<Reference>;

  public status?: CarePlanStatus;

  public intent?: CarePlanIntent;

  public category?: Array<CodeableConcept>;

  public title?: PrimitiveString;

  public description?: PrimitiveString;

  public subject?: Reference;

  public encounter?: Reference;

  public period?: Period;

  public created?: PrimitiveDateTime;

  public author?: Reference;

  public contributor?: Array<Reference>;

  public careTeam?: Array<Reference>;

  public addresses?: Array<Reference>;

  public supportingInfo?: Array<Reference>;

  public goal?: Array<Reference>;

  public activity?: Array<CarePlanActivity>;

  public note?: Array<Annotation>;

  public static parse(
    json: ICarePlan,
    providedInstance: CarePlan = new CarePlan()
  ): CarePlan {
    const newInstance: CarePlan = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => {
        const ext = json._instantiatesCanonical && json._instantiatesCanonical[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => {
        const ext = json._instantiatesUri && json._instantiatesUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.replaces !== undefined) {
      newInstance.replaces = json.replaces.map((x) => Reference.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CarePlanStatus.parsePrimitive(json.status, json._status);
    }
    if (json.intent !== undefined) {
      newInstance.intent = CarePlanIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.contributor !== undefined) {
      newInstance.contributor = json.contributor.map((x) => Reference.parse(x));
    }
    if (json.careTeam !== undefined) {
      newInstance.careTeam = json.careTeam.map((x) => Reference.parse(x));
    }
    if (json.addresses !== undefined) {
      newInstance.addresses = json.addresses.map((x) => Reference.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => Reference.parse(x));
    }
    if (json.goal !== undefined) {
      newInstance.goal = json.goal.map((x) => Reference.parse(x));
    }
    if (json.activity !== undefined) {
      newInstance.activity = json.activity.map((x) => CarePlanActivity.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isCarePlan(input?: unknown): input is CarePlan {
    const castInput = input as CarePlan;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlan";
  }

  public toJSON(): ICarePlan {
    const result: ICarePlan = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.filter(x => !!x).map(x => x.value) as typeof result.instantiatesCanonical;
      result._instantiatesCanonical = Extension.serializePrimitiveExtensionArray(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.filter(x => !!x).map(x => x.value) as typeof result.instantiatesUri;
      result._instantiatesUri = Extension.serializePrimitiveExtensionArray(this.instantiatesUri);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.replaces) {
      result.replaces = this.replaces.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.contributor) {
      result.contributor = this.contributor.map((x) => x.toJSON());
    }

    if (this.careTeam) {
      result.careTeam = this.careTeam.map((x) => x.toJSON());
    }

    if (this.addresses) {
      result.addresses = this.addresses.map((x) => x.toJSON());
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.goal) {
      result.goal = this.goal.map((x) => x.toJSON());
    }

    if (this.activity) {
      result.activity = this.activity.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CarePlan {
    return CarePlan.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CarePlan";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
