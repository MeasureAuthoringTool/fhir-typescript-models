/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ChargeItemDefinitionApplicability,
  ChargeItemDefinitionPropertyGroup,
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  IChargeItemDefinition,
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
  Reference,
  UsageContext,
} from "../internal";

export class ChargeItemDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemDefinition";

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public title?: PrimitiveString;

  public derivedFromUri?: Array<PrimitiveUri>;

  public partOf?: Array<PrimitiveCanonical>;

  public replaces?: Array<PrimitiveCanonical>;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public copyright?: PrimitiveMarkdown;

  public approvalDate?: PrimitiveDate;

  public lastReviewDate?: PrimitiveDate;

  public effectivePeriod?: Period;

  public code?: CodeableConcept;

  public instance?: Array<Reference>;

  public applicability?: Array<ChargeItemDefinitionApplicability>;

  public propertyGroup?: Array<ChargeItemDefinitionPropertyGroup>;

  public static parse(
    json: IChargeItemDefinition,
    providedInstance: ChargeItemDefinition = new ChargeItemDefinition()
  ): ChargeItemDefinition {
    const newInstance: ChargeItemDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.derivedFromUri !== undefined) {
      newInstance.derivedFromUri = json.derivedFromUri.map((x, i) => {
        const ext = json._derivedFromUri && json._derivedFromUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = json.partOf.map((x, i) => {
        const ext = json._partOf && json._partOf[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.replaces !== undefined) {
      newInstance.replaces = json.replaces.map((x, i) => {
        const ext = json._replaces && json._replaces[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
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
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.instance !== undefined) {
      newInstance.instance = json.instance.map((x) => Reference.parse(x));
    }
    if (json.applicability !== undefined) {
      newInstance.applicability = json.applicability.map((x) => ChargeItemDefinitionApplicability.parse(x));
    }
    if (json.propertyGroup !== undefined) {
      newInstance.propertyGroup = json.propertyGroup.map((x) => ChargeItemDefinitionPropertyGroup.parse(x));
    }
    return newInstance;
  }

  public static isChargeItemDefinition(input?: unknown): input is ChargeItemDefinition {
    const castInput = input as ChargeItemDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemDefinition";
  }

  public toJSON(): IChargeItemDefinition {
    const result: IChargeItemDefinition = super.toJSON();

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

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.derivedFromUri) {
      result.derivedFromUri = this.derivedFromUri.filter(x => !!x).map(x => x.value) as typeof result.derivedFromUri;
      result._derivedFromUri = Extension.serializePrimitiveExtensionArray(this.derivedFromUri);
    }

    if (this.partOf) {
      result.partOf = this.partOf.filter(x => !!x).map(x => x.value) as typeof result.partOf;
      result._partOf = Extension.serializePrimitiveExtensionArray(this.partOf);
    }

    if (this.replaces) {
      result.replaces = this.replaces.filter(x => !!x).map(x => x.value) as typeof result.replaces;
      result._replaces = Extension.serializePrimitiveExtensionArray(this.replaces);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
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

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.instance) {
      result.instance = this.instance.map((x) => x.toJSON());
    }

    if (this.applicability) {
      result.applicability = this.applicability.map((x) => x.toJSON());
    }

    if (this.propertyGroup) {
      result.propertyGroup = this.propertyGroup.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ChargeItemDefinition {
    return ChargeItemDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ChargeItemDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
