//
//  KeyAddressManager.m
//  buoyantwallet
//
//  Created by Kristofer Pelchat on 8/14/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "KeyAddressManager.h"
#import <React/RCTLog.h>
#import <Keyaddr/Keyaddr.h>

@implementation KeyAddressManager

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(keyaddrWordsFromBytes, lang:(NSString*)lang bytes:(NSString*)bytes
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  
  NSString *words = KeyaddrWordsFromBytes(lang, bytes, error);
  if (error) {
    reject(@"no_events", @"Issue calling keyaddrWordsFromBytes", *error);
  } else {
    resolve(words);
  }
}

RCT_REMAP_METHOD(keyaddrWordsToBytes, lang:(NSString*)lang words:(NSString*)words
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  
  NSString *bytes = KeyaddrWordsToBytes(lang, words, error);
  if (error) {
    reject(@"no_events", @"Issue calling keyaddrWordsToBytes", *error);
  } else {
    resolve(bytes);
  }
}

RCT_REMAP_METHOD(keyaddrWordsFromPrefix, lang:(NSString*)lang prefix:(NSString*)prefix max:(nonnull NSNumber*)max
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  
  NSString *words = KeyaddrWordsFromPrefix(lang, prefix, [max longValue]);
  if (error) {
    reject(@"no_events", @"Issue calling keyaddrWordsFromPrefix", *error);
  } else {
    resolve(words);
  }
}

RCT_REMAP_METHOD(newKey, seed:(NSString*)seed
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrNewKey(seed, error);
  
  if (error) {
    reject(@"no_events", @"Issue calling newKey", *error);
  } else {
    resolve([keyAddrKey key]);
  }
}

RCT_REMAP_METHOD(child, key:(NSString*)key index:(nonnull NSNumber*)index
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrKey *privateKey = [keyAddrKey child:[index intValue] error:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling child", *error);
  } else {
    resolve([privateKey key]);
  }
}

RCT_REMAP_METHOD(hardenedChild,keyHC:(NSString*)keyHC index:(nonnull NSNumber*)index
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(keyHC, error);
  KeyaddrKey *privateKey = [keyAddrKey hardenedChild:[index intValue] error:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling hardenedChild", *error);
  } else {
    resolve([privateKey key]);
  }
}

RCT_REMAP_METHOD(toPublic,key:(NSString*)key
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrKey *publicKey = [keyAddrKey toPublic:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling toPublic", *error);
  } else {
    resolve([publicKey key]);
  }
}

RCT_REMAP_METHOD(ndauAddress,ndauAddr:(NSString*)key
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrAddress *address = [keyAddrKey ndauAddress:error];
  
  if (error) {
    reject(@"no_events", @"Issue calling ndauAddress", *error);
  } else {
    resolve([address address]);
  }
}

RCT_REMAP_METHOD(sign,key:(NSString*)key msgstr:(NSString*)msgstr
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrFromString(key, error);
  KeyaddrSignature *sig = [keyAddrKey sign:msgstr error:error];
  RCTLogInfo(@"sign call created signature %@", sig);
  
  if (error) {
    reject(@"no_events", @"Issue calling sign", *error);
  } else {
    resolve([sig signature]);
  }
}

RCT_REMAP_METHOD(deriveFrom,parentKey:(NSString*)parentKey parentPath:(NSString*)parentPath childPath:(NSString*)childPath
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *__autoreleasing *error = NULL;
  KeyaddrKey *keyAddrKey = KeyaddrDeriveFrom(parentKey, parentPath, childPath, error);
  
  if (error) {
    reject(@"no_events", @"Issue calling deriveFrom", *error);
  } else {
    resolve([keyAddrKey key]);
  }
}

@end
