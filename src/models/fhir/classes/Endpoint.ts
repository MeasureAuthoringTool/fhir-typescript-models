/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  Coding,
  ContactPoint,
  DomainResource,
  EndpointStatus,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IEndpoint,
  MimeType,
  Period,
  PrimitiveString,
  PrimitiveUrl,
  Reference,
  FhirType
} from "../internal";

@FhirType("Endpoint", "DomainResource")
export class Endpoint extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Endpoint";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EndpointStatus")
  public status?: EndpointStatus;

  @FhirField("Coding")
  public connectionType?: Coding;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("Reference")
  public managingOrganization?: Reference;

  @FhirList("ContactPoint")
  public contact?: Array<ContactPoint>;

  @FhirField("Period")
  public period?: Period;

  @FhirList("CodeableConcept")
  public payloadType?: Array<CodeableConcept>;

  @FhirList("MimeType")
  public payloadMimeType?: Array<MimeType>;

  @FhirField("PrimitiveUrl")
  public address?: PrimitiveUrl;

  @FhirList("PrimitiveString")
  public header?: Array<PrimitiveString>;

  public static parse(
    json: IEndpoint,
    providedInstance: Endpoint = new Endpoint()
  ): Endpoint {
    const newInstance: Endpoint = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EndpointStatus.parsePrimitive(json.status, json._status);
    }
    if (json.connectionType !== undefined) {
      newInstance.connectionType = Coding.parse(json.connectionType);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.payloadType !== undefined) {
      newInstance.payloadType = json.payloadType.map((x) => CodeableConcept.parse(x));
    }
    if (json.payloadMimeType !== undefined) {
      newInstance.payloadMimeType = json.payloadMimeType.map((x, i) => MimeType.parsePrimitive(x, json._payloadMimeType?.[i]));
    }
    if (json.address !== undefined) {
      newInstance.address = PrimitiveUrl.parsePrimitive(json.address, json._address);
    }
    if (json.header !== undefined) {
      newInstance.header = json.header.map((x, i) => PrimitiveString.parsePrimitive(x, json._header?.[i]));
    }
    return newInstance;
  }

  public static isEndpoint(input?: unknown): input is Endpoint {
    const castInput = input as Endpoint;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Endpoint";
  }

  public toJSON(): IEndpoint {
    const result: IEndpoint = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.connectionType) {
      result.connectionType = this.connectionType.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.payloadType) {
      result.payloadType = this.payloadType.map((x) => x.toJSON());
    }

    if (this.payloadMimeType) {
      result.payloadMimeType = this.payloadMimeType.filter(x => !!x).map(x => x.value) as typeof result.payloadMimeType;
      result._payloadMimeType = Extension.serializePrimitiveExtensionArray(this.payloadMimeType);
    }

    if (this.address) {
      result.address = this.address.value;
      result._address = Extension.serializePrimitiveExtension(this.address);
    }

    if (this.header) {
      result.header = this.header.filter(x => !!x).map(x => x.value) as typeof result.header;
      result._header = Extension.serializePrimitiveExtensionArray(this.header);
    }

    return result;
  }

  public clone(): Endpoint {
    return Endpoint.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Endpoint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
