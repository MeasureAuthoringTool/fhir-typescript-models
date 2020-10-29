/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMolecularSequenceRepository,
  PrimitiveString,
  PrimitiveUri,
  RepositoryType,
  FieldMetadata
} from "../internal";

export class MolecularSequenceRepository extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.Repository";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [RepositoryType],
      isArray: false
    }, {
      fieldName: "url",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "datasetId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "variantsetId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "readsetId",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public type?: RepositoryType;

  public url?: PrimitiveUri;

  public name?: PrimitiveString;

  public datasetId?: PrimitiveString;

  public variantsetId?: PrimitiveString;

  public readsetId?: PrimitiveString;

  public static parse(
    json: IMolecularSequenceRepository,
    providedInstance: MolecularSequenceRepository = new MolecularSequenceRepository()
  ): MolecularSequenceRepository {
    const newInstance: MolecularSequenceRepository = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = RepositoryType.parsePrimitive(json.type, json._type);
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.datasetId !== undefined) {
      newInstance.datasetId = PrimitiveString.parsePrimitive(json.datasetId, json._datasetId);
    }
    if (json.variantsetId !== undefined) {
      newInstance.variantsetId = PrimitiveString.parsePrimitive(json.variantsetId, json._variantsetId);
    }
    if (json.readsetId !== undefined) {
      newInstance.readsetId = PrimitiveString.parsePrimitive(json.readsetId, json._readsetId);
    }
    return newInstance;
  }

  public static isMolecularSequenceRepository(input?: unknown): input is MolecularSequenceRepository {
    const castInput = input as MolecularSequenceRepository;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceRepository";
  }

  public toJSON(): IMolecularSequenceRepository {
    const result: IMolecularSequenceRepository = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.datasetId) {
      result.datasetId = this.datasetId.value;
      result._datasetId = Extension.serializePrimitiveExtension(this.datasetId);
    }

    if (this.variantsetId) {
      result.variantsetId = this.variantsetId.value;
      result._variantsetId = Extension.serializePrimitiveExtension(this.variantsetId);
    }

    if (this.readsetId) {
      result.readsetId = this.readsetId.value;
      result._readsetId = Extension.serializePrimitiveExtension(this.readsetId);
    }

    return result;
  }

  public clone(): MolecularSequenceRepository {
    return MolecularSequenceRepository.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceRepository";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
