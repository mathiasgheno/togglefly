import { CreateTableCommandInput } from '@aws-sdk/client-dynamodb/dist-types/commands/CreateTableCommand';

export function generateDefaultCreateTableConfig(TableName: string): CreateTableCommandInput;
