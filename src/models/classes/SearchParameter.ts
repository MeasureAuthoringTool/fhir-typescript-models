/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  ISearchParameter,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  ResourceType,
  SearchComparator,
  SearchModifierCode,
  SearchParameterComponent,
  SearchParamType,
  UsageContext,
  XPathUsageType,
} from "../internal";

export class SearchParameter extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SearchParameter";

  public url?: PrimitiveUri;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public derivedFrom?: PrimitiveCanonical;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public code?: PrimitiveCode;

  public base?: Array<ResourceType>;

  public type?: SearchParamType;

  public expression?: PrimitiveString;

  public xpath?: PrimitiveString;

  public xpathUsage?: XPathUsageType;

  public target?: Array<ResourceType>;

  public multipleOr?: PrimitiveBoolean;

  public multipleAnd?: PrimitiveBoolean;

  public comparator?: Array<SearchComparator>;

  public modifier?: Array<SearchModifierCode>;

  public chain?: Array<PrimitiveString>;

  public component?: Array<SearchParameterComponent>;

  public static parse(
    json: ISearchParameter,
    providedInstance: SearchParameter = new SearchParameter()
  ): SearchParameter {
    const newInstance: SearchParameter = DomainResource.parse(json, providedInstance);
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.version) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.derivedFrom) {
      newInstance.derivedFrom = PrimitiveCanonical.parsePrimitive(json.derivedFrom, json._derivedFrom);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.code) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.base) {
      newInstance.base = json.base.map((x, i) => {
        const ext = json._base && json._base[i];
        return ResourceType.parsePrimitive(x, ext);
      });
    }
    if (json.type) {
      newInstance.type = SearchParamType.parsePrimitive(json.type, json._type);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.xpath) {
      newInstance.xpath = PrimitiveString.parsePrimitive(json.xpath, json._xpath);
    }
    if (json.xpathUsage) {
      newInstance.xpathUsage = XPathUsageType.parsePrimitive(json.xpathUsage, json._xpathUsage);
    }
    if (json.target) {
      newInstance.target = json.target.map((x, i) => {
        const ext = json._target && json._target[i];
        return ResourceType.parsePrimitive(x, ext);
      });
    }
    if (json.multipleOr) {
      newInstance.multipleOr = PrimitiveBoolean.parsePrimitive(json.multipleOr, json._multipleOr);
    }
    if (json.multipleAnd) {
      newInstance.multipleAnd = PrimitiveBoolean.parsePrimitive(json.multipleAnd, json._multipleAnd);
    }
    if (json.comparator) {
      newInstance.comparator = json.comparator.map((x, i) => {
        const ext = json._comparator && json._comparator[i];
        return SearchComparator.parsePrimitive(x, ext);
      });
    }
    if (json.modifier) {
      newInstance.modifier = json.modifier.map((x, i) => {
        const ext = json._modifier && json._modifier[i];
        return SearchModifierCode.parsePrimitive(x, ext);
      });
    }
    if (json.chain) {
      newInstance.chain = json.chain.map((x, i) => {
        const ext = json._chain && json._chain[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.component) {
      newInstance.component = json.component.map((x) => SearchParameterComponent.parse(x));
    }
    return newInstance;
  }

  public static isSearchParameter(input?: unknown): input is SearchParameter {
    const castInput = input as SearchParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SearchParameter";
  }

  public toJSON(): ISearchParameter {
    const result: ISearchParameter = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.derivedFrom) {
      result.derivedFrom = this.derivedFrom.value;
      result._derivedFrom = Extension.serializePrimitiveExtension(this.derivedFrom);
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

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.base) {
      result.base = this.base.filter(x => !!x).map(x => x.value) as typeof result.base;
      result._base = Extension.serializePrimitiveExtensionArray(this.base);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.xpath) {
      result.xpath = this.xpath.value;
      result._xpath = Extension.serializePrimitiveExtension(this.xpath);
    }

    if (this.xpathUsage) {
      result.xpathUsage = this.xpathUsage.value;
      result._xpathUsage = Extension.serializePrimitiveExtension(this.xpathUsage);
    }

    if (this.target) {
      result.target = this.target.filter(x => !!x).map(x => x.value) as typeof result.target;
      result._target = Extension.serializePrimitiveExtensionArray(this.target);
    }

    if (this.multipleOr) {
      result.multipleOr = this.multipleOr.value;
      result._multipleOr = Extension.serializePrimitiveExtension(this.multipleOr);
    }

    if (this.multipleAnd) {
      result.multipleAnd = this.multipleAnd.value;
      result._multipleAnd = Extension.serializePrimitiveExtension(this.multipleAnd);
    }

    if (this.comparator) {
      result.comparator = this.comparator.filter(x => !!x).map(x => x.value) as typeof result.comparator;
      result._comparator = Extension.serializePrimitiveExtensionArray(this.comparator);
    }

    if (this.modifier) {
      result.modifier = this.modifier.filter(x => !!x).map(x => x.value) as typeof result.modifier;
      result._modifier = Extension.serializePrimitiveExtensionArray(this.modifier);
    }

    if (this.chain) {
      result.chain = this.chain.filter(x => !!x).map(x => x.value) as typeof result.chain;
      result._chain = Extension.serializePrimitiveExtensionArray(this.chain);
    }

    if (this.component) {
      result.component = this.component.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SearchParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
