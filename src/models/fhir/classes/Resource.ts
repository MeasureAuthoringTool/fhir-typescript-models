/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  lookupResourceType,
  Extension,
  IResource,
  Meta,
  PrimitiveCode,
  PrimitiveUri,
  Type,
  FieldMetadata
} from "../internal";

export class Resource extends Type {
  static readonly baseType: string = "";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Resource";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Type.fieldInfo, {
      fieldName: "id",
      fieldType: [String],
      isArray: false
    }, {
      fieldName: "meta",
      fieldType: [Meta],
      isArray: false
    }, {
      fieldName: "implicitRules",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "language",
      fieldType: [PrimitiveCode],
      isArray: false
    }, {
      fieldName: "resourceType",
      fieldType: [String],
      isArray: false
    }];
  }

  public id?: string;

  public meta?: Meta;

  public implicitRules?: PrimitiveUri;

  public language?: PrimitiveCode;

  public resourceType?: string;

  constructor() {
    super();
    this.resourceType = this.getTypeName();
  }
  
  public static parse(
    json: IResource,
    providedInstance: Resource = new Resource()
  ): Resource {
    const newInstance: Resource = Type.parse(json, providedInstance);
  
      // If not invoked by a child class
      if (
        Resource.isResource(newInstance) &&
        json.resourceType &&
        json.resourceType !== "Resource"
      ) {
        const resourceSubclass: typeof Resource | undefined = lookupResourceType(
          json.resourceType
        );
        if (resourceSubclass) {
          return resourceSubclass.parse(json);
        }
      }
  
    if (json.id !== undefined) {
      newInstance.id = json.id;
    }
    if (json.meta !== undefined) {
      newInstance.meta = Meta.parse(json.meta);
    }
    if (json.implicitRules !== undefined) {
      newInstance.implicitRules = PrimitiveUri.parsePrimitive(json.implicitRules, json._implicitRules);
    }
    if (json.language !== undefined) {
      newInstance.language = PrimitiveCode.parsePrimitive(json.language, json._language);
    }
    if (json.resourceType !== undefined) {
      newInstance.resourceType = json.resourceType;
    }
    return newInstance;
  }

  public static isResource(input?: unknown): input is Resource {
    const castInput = input as Resource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Resource";
  }

  public toJSON(): IResource {
    const result: IResource = super.toJSON();

    if (this.id) {
      result.id = this.id;
    }

    if (this.meta) {
      result.meta = this.meta.toJSON();
    }

    if (this.implicitRules) {
      result.implicitRules = this.implicitRules.value;
      result._implicitRules = Extension.serializePrimitiveExtension(this.implicitRules);
    }

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.resourceType) {
      result.resourceType = this.resourceType;
    }

    return result;
  }

  public clone(): Resource {
    return Resource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Resource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
