/* eslint-disable import/prefer-default-export, import/no-cycle */
import "reflect-metadata";
import { Type, FieldMetadata, FieldMetadataType, TypeName } from "./internal";

const fieldInfoKey = Symbol("fieldInfo");
const fieldListKey = Symbol("fieldList");
const parentTypeKey = Symbol("parentTypeName");
const typeNameKey = Symbol("typeName");
type PropertyDecoratorFunction = (target: Type, propertyKey: string) => void;
type ClassDecoratorFunction = (constructor: typeof Type) => void;

export function getFieldInfo(target: Type, propertyKey: string): FieldMetadata | null {
  if (Reflect.hasMetadata(fieldInfoKey, target, propertyKey)) {
    return Reflect.getMetadata(fieldInfoKey, target, propertyKey) as FieldMetadata;
  }
  return null;
}

export function getFieldList(target: Type): Array<string> {
  if (Reflect.hasMetadata(fieldListKey, target)) {
    return Reflect.getMetadata(fieldListKey, target) as Array<string>
  }
  return [];
}

export function getParentTypeName(target: Type): TypeName | null {
  if (Reflect.hasMetadata(parentTypeKey, target)) {
    return Reflect.getMetadata(parentTypeKey, target) as TypeName
  }
  return null;
}

export function getTypeName(target: Type): TypeName | null {
  if (Reflect.hasMetadata(typeNameKey, target)) {
    return Reflect.getMetadata(typeNameKey, target) as TypeName
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function FhirType(typeName: TypeName, parentType?: TypeName): ClassDecoratorFunction {
  return function decorator(constructor: typeof Type): void {
    const child = constructor.prototype;

    Reflect.defineMetadata(parentTypeKey, parentType || null, child);
    Reflect.defineMetadata(typeNameKey, typeName || null, child);
  }
}

function buildFieldDecorator(fieldTypeNames: Array<FieldMetadataType>, isArray = false): PropertyDecoratorFunction {
  return function decorator(target: Type, propertyKey: string): void {
    let fieldList: Array<string>;

    // Retrieve this class' list of fields if it exists
    if (Reflect.hasOwnMetadata(fieldListKey, target)) {
      fieldList = Reflect.getOwnMetadata(fieldListKey, target) as Array<string>;
    } else if (Reflect.hasMetadata(fieldListKey, target)) {
      // If we don't have a list of fields started yet, we need to start one
      // If the parent class has one, we use that as a starting point
      fieldList = Reflect.getMetadata(fieldListKey, target) as Array<string>;
      fieldList = [...fieldList];
    } else {
      // otherwise, that means there's no parent list and we start from scratch
      fieldList = [];
    }

    fieldList.push(propertyKey);
    Reflect.defineMetadata(fieldListKey, fieldList, target);

    // Store the metadata specific to this field
    const fieldMetadata = new FieldMetadata(propertyKey, fieldTypeNames, isArray);
    Reflect.defineMetadata(fieldInfoKey, fieldMetadata, target, propertyKey);
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function FhirField(fieldTypeName: FieldMetadataType): PropertyDecoratorFunction {
  return buildFieldDecorator([fieldTypeName], false);
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function FhirList(fieldTypeName: FieldMetadataType): PropertyDecoratorFunction {
  return buildFieldDecorator([fieldTypeName], true);
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function FhirChoice(...fieldTypeNames: Array<FieldMetadataType>): PropertyDecoratorFunction {
  return buildFieldDecorator(fieldTypeNames, false);
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
