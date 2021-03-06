// package: controller
// file: controller.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as player_pb from "./player_pb";
import * as game_pb from "./game_pb";
import * as node_pb from "./node_pb";

export class GetPlayerRequest extends jspb.Message { 
    getPlayerId(): number;
    setPlayerId(value: number): GetPlayerRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerRequest): GetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerRequest;
    static deserializeBinaryFromReader(message: GetPlayerRequest, reader: jspb.BinaryReader): GetPlayerRequest;
}

export namespace GetPlayerRequest {
    export type AsObject = {
        playerId: number,
    }
}

export class GetPlayerByTokenRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GetPlayerByTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerByTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerByTokenRequest): GetPlayerByTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerByTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerByTokenRequest;
    static deserializeBinaryFromReader(message: GetPlayerByTokenRequest, reader: jspb.BinaryReader): GetPlayerByTokenRequest;
}

export namespace GetPlayerByTokenRequest {
    export type AsObject = {
        token: string,
    }
}

export class GetPlayerReply extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): player_pb.Player | undefined;
    setPlayer(value?: player_pb.Player): GetPlayerReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerReply): GetPlayerReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerReply;
    static deserializeBinaryFromReader(message: GetPlayerReply, reader: jspb.BinaryReader): GetPlayerReply;
}

export namespace GetPlayerReply {
    export type AsObject = {
        player?: player_pb.Player.AsObject,
    }
}

export class UpdateAndGetPlayerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateAndGetPlayerRequest;

    getSource(): player_pb.PlayerSource;
    setSource(value: player_pb.PlayerSource): UpdateAndGetPlayerRequest;

    getSourceId(): string;
    setSourceId(value: string): UpdateAndGetPlayerRequest;


    hasSourceState(): boolean;
    clearSourceState(): void;
    getSourceState(): player_pb.PlayerSourceState | undefined;
    setSourceState(value?: player_pb.PlayerSourceState): UpdateAndGetPlayerRequest;


    hasRealm(): boolean;
    clearRealm(): void;
    getRealm(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRealm(value?: google_protobuf_wrappers_pb.StringValue): UpdateAndGetPlayerRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAndGetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAndGetPlayerRequest): UpdateAndGetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAndGetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAndGetPlayerRequest;
    static deserializeBinaryFromReader(message: UpdateAndGetPlayerRequest, reader: jspb.BinaryReader): UpdateAndGetPlayerRequest;
}

export namespace UpdateAndGetPlayerRequest {
    export type AsObject = {
        name: string,
        source: player_pb.PlayerSource,
        sourceId: string,
        sourceState?: player_pb.PlayerSourceState.AsObject,
        realm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UpdateAndGetPlayerReply extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): player_pb.Player | undefined;
    setPlayer(value?: player_pb.Player): UpdateAndGetPlayerReply;

    getToken(): string;
    setToken(value: string): UpdateAndGetPlayerReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAndGetPlayerReply.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAndGetPlayerReply): UpdateAndGetPlayerReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAndGetPlayerReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAndGetPlayerReply;
    static deserializeBinaryFromReader(message: UpdateAndGetPlayerReply, reader: jspb.BinaryReader): UpdateAndGetPlayerReply;
}

export namespace UpdateAndGetPlayerReply {
    export type AsObject = {
        player?: player_pb.Player.AsObject,
        token: string,
    }
}

export class ListNodesReply extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<node_pb.Node>;
    setNodesList(value: Array<node_pb.Node>): ListNodesReply;
    addNodes(value?: node_pb.Node, index?: number): node_pb.Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodesReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodesReply): ListNodesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodesReply;
    static deserializeBinaryFromReader(message: ListNodesReply, reader: jspb.BinaryReader): ListNodesReply;
}

export namespace ListNodesReply {
    export type AsObject = {
        nodesList: Array<node_pb.Node.AsObject>,
    }
}

export class ListGamesRequest extends jspb.Message { 

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setKeyword(value?: google_protobuf_wrappers_pb.StringValue): ListGamesRequest;

    getStatus(): GameStatusFilter;
    setStatus(value: GameStatusFilter): ListGamesRequest;


    hasIsPrivate(): boolean;
    clearIsPrivate(): void;
    getIsPrivate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsPrivate(value?: google_protobuf_wrappers_pb.BoolValue): ListGamesRequest;


    hasIsLive(): boolean;
    clearIsLive(): void;
    getIsLive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsLive(value?: google_protobuf_wrappers_pb.BoolValue): ListGamesRequest;


    hasTake(): boolean;
    clearTake(): void;
    getTake(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTake(value?: google_protobuf_wrappers_pb.Int64Value): ListGamesRequest;


    hasSinceId(): boolean;
    clearSinceId(): void;
    getSinceId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setSinceId(value?: google_protobuf_wrappers_pb.Int32Value): ListGamesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGamesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListGamesRequest): ListGamesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGamesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGamesRequest;
    static deserializeBinaryFromReader(message: ListGamesRequest, reader: jspb.BinaryReader): ListGamesRequest;
}

export namespace ListGamesRequest {
    export type AsObject = {
        keyword?: google_protobuf_wrappers_pb.StringValue.AsObject,
        status: GameStatusFilter,
        isPrivate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        isLive?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        take?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sinceId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class ListGamesReply extends jspb.Message { 
    clearGamesList(): void;
    getGamesList(): Array<game_pb.GameEntry>;
    setGamesList(value: Array<game_pb.GameEntry>): ListGamesReply;
    addGames(value?: game_pb.GameEntry, index?: number): game_pb.GameEntry;

    getHasMore(): boolean;
    setHasMore(value: boolean): ListGamesReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListGamesReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListGamesReply): ListGamesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListGamesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListGamesReply;
    static deserializeBinaryFromReader(message: ListGamesReply, reader: jspb.BinaryReader): ListGamesReply;
}

export namespace ListGamesReply {
    export type AsObject = {
        gamesList: Array<game_pb.GameEntry.AsObject>,
        hasMore: boolean,
    }
}

export class CreateGameRequest extends jspb.Message { 
    getPlayerId(): number;
    setPlayerId(value: number): CreateGameRequest;

    getName(): string;
    setName(value: string): CreateGameRequest;


    hasMap(): boolean;
    clearMap(): void;
    getMap(): game_pb.Map | undefined;
    setMap(value?: game_pb.Map): CreateGameRequest;

    getIsPrivate(): boolean;
    setIsPrivate(value: boolean): CreateGameRequest;

    getIsLive(): boolean;
    setIsLive(value: boolean): CreateGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameRequest): CreateGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameRequest;
    static deserializeBinaryFromReader(message: CreateGameRequest, reader: jspb.BinaryReader): CreateGameRequest;
}

export namespace CreateGameRequest {
    export type AsObject = {
        playerId: number,
        name: string,
        map?: game_pb.Map.AsObject,
        isPrivate: boolean,
        isLive: boolean,
    }
}

export class CreateGameReply extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): game_pb.Game | undefined;
    setGame(value?: game_pb.Game): CreateGameReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateGameReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateGameReply): CreateGameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateGameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateGameReply;
    static deserializeBinaryFromReader(message: CreateGameReply, reader: jspb.BinaryReader): CreateGameReply;
}

export namespace CreateGameReply {
    export type AsObject = {
        game?: game_pb.Game.AsObject,
    }
}

export class JoinGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): JoinGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): JoinGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinGameRequest): JoinGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinGameRequest;
    static deserializeBinaryFromReader(message: JoinGameRequest, reader: jspb.BinaryReader): JoinGameRequest;
}

export namespace JoinGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class JoinGameReply extends jspb.Message { 

    hasGame(): boolean;
    clearGame(): void;
    getGame(): game_pb.Game | undefined;
    setGame(value?: game_pb.Game): JoinGameReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinGameReply.AsObject;
    static toObject(includeInstance: boolean, msg: JoinGameReply): JoinGameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinGameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinGameReply;
    static deserializeBinaryFromReader(message: JoinGameReply, reader: jspb.BinaryReader): JoinGameReply;
}

export namespace JoinGameReply {
    export type AsObject = {
        game?: game_pb.Game.AsObject,
    }
}

export class CreateJoinGameTokenRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): CreateJoinGameTokenRequest;

    getPlayerId(): number;
    setPlayerId(value: number): CreateJoinGameTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJoinGameTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJoinGameTokenRequest): CreateJoinGameTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJoinGameTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJoinGameTokenRequest;
    static deserializeBinaryFromReader(message: CreateJoinGameTokenRequest, reader: jspb.BinaryReader): CreateJoinGameTokenRequest;
}

export namespace CreateJoinGameTokenRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class CreateJoinGameTokenReply extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CreateJoinGameTokenReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJoinGameTokenReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJoinGameTokenReply): CreateJoinGameTokenReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJoinGameTokenReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJoinGameTokenReply;
    static deserializeBinaryFromReader(message: CreateJoinGameTokenReply, reader: jspb.BinaryReader): CreateJoinGameTokenReply;
}

export namespace CreateJoinGameTokenReply {
    export type AsObject = {
        token: string,
    }
}

export class JoinGameByTokenRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): JoinGameByTokenRequest;

    getPlayerId(): number;
    setPlayerId(value: number): JoinGameByTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinGameByTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinGameByTokenRequest): JoinGameByTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinGameByTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinGameByTokenRequest;
    static deserializeBinaryFromReader(message: JoinGameByTokenRequest, reader: jspb.BinaryReader): JoinGameByTokenRequest;
}

export namespace JoinGameByTokenRequest {
    export type AsObject = {
        token: string,
        playerId: number,
    }
}

export class LeaveGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): LeaveGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): LeaveGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveGameRequest): LeaveGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveGameRequest;
    static deserializeBinaryFromReader(message: LeaveGameRequest, reader: jspb.BinaryReader): LeaveGameRequest;
}

export namespace LeaveGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class SelectGameNodeRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): SelectGameNodeRequest;

    getPlayerId(): number;
    setPlayerId(value: number): SelectGameNodeRequest;


    hasNodeId(): boolean;
    clearNodeId(): void;
    getNodeId(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setNodeId(value?: google_protobuf_wrappers_pb.Int32Value): SelectGameNodeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectGameNodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SelectGameNodeRequest): SelectGameNodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectGameNodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectGameNodeRequest;
    static deserializeBinaryFromReader(message: SelectGameNodeRequest, reader: jspb.BinaryReader): SelectGameNodeRequest;
}

export namespace SelectGameNodeRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
        nodeId?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class CancelGameRequest extends jspb.Message { 
    getGameId(): number;
    setGameId(value: number): CancelGameRequest;

    getPlayerId(): number;
    setPlayerId(value: number): CancelGameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelGameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelGameRequest): CancelGameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelGameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelGameRequest;
    static deserializeBinaryFromReader(message: CancelGameRequest, reader: jspb.BinaryReader): CancelGameRequest;
}

export namespace CancelGameRequest {
    export type AsObject = {
        gameId: number,
        playerId: number,
    }
}

export class ImportMapChecksumsRequest extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<game_pb.MapChecksumImportItem>;
    setItemsList(value: Array<game_pb.MapChecksumImportItem>): ImportMapChecksumsRequest;
    addItems(value?: game_pb.MapChecksumImportItem, index?: number): game_pb.MapChecksumImportItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportMapChecksumsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportMapChecksumsRequest): ImportMapChecksumsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportMapChecksumsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportMapChecksumsRequest;
    static deserializeBinaryFromReader(message: ImportMapChecksumsRequest, reader: jspb.BinaryReader): ImportMapChecksumsRequest;
}

export namespace ImportMapChecksumsRequest {
    export type AsObject = {
        itemsList: Array<game_pb.MapChecksumImportItem.AsObject>,
    }
}

export class ImportMapChecksumsReply extends jspb.Message { 
    getUpdated(): number;
    setUpdated(value: number): ImportMapChecksumsReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportMapChecksumsReply.AsObject;
    static toObject(includeInstance: boolean, msg: ImportMapChecksumsReply): ImportMapChecksumsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportMapChecksumsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportMapChecksumsReply;
    static deserializeBinaryFromReader(message: ImportMapChecksumsReply, reader: jspb.BinaryReader): ImportMapChecksumsReply;
}

export namespace ImportMapChecksumsReply {
    export type AsObject = {
        updated: number,
    }
}

export class SearchMapChecksumRequest extends jspb.Message { 
    getSha1(): string;
    setSha1(value: string): SearchMapChecksumRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchMapChecksumRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchMapChecksumRequest): SearchMapChecksumRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchMapChecksumRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchMapChecksumRequest;
    static deserializeBinaryFromReader(message: SearchMapChecksumRequest, reader: jspb.BinaryReader): SearchMapChecksumRequest;
}

export namespace SearchMapChecksumRequest {
    export type AsObject = {
        sha1: string,
    }
}

export class SearchMapChecksumReply extends jspb.Message { 

    hasChecksum(): boolean;
    clearChecksum(): void;
    getChecksum(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setChecksum(value?: google_protobuf_wrappers_pb.UInt32Value): SearchMapChecksumReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchMapChecksumReply.AsObject;
    static toObject(includeInstance: boolean, msg: SearchMapChecksumReply): SearchMapChecksumReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchMapChecksumReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchMapChecksumReply;
    static deserializeBinaryFromReader(message: SearchMapChecksumReply, reader: jspb.BinaryReader): SearchMapChecksumReply;
}

export namespace SearchMapChecksumReply {
    export type AsObject = {
        checksum?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}

export enum GameStatusFilter {
    GAMESTATUSFILTERALL = 0,
    GAMESTATUSFILTEROPEN = 1,
    GAMESTATUSFILTERLIVE = 2,
    GAMESTATUSFILTERENDED = 3,
}
